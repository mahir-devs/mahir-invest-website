'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export type ClaudeTheme = 'default' | 'blue' | 'mix';

export interface CloudHeroProps {
    /** Height of the cloud band as % of parent, anchored to bottom (default 55) */
    height?: number;
    /** 0–1 overall opacity */
    opacity?: number;
    /** Seconds for one left→right loop (default 28) */
    speed?: number;
    /** Asset set: `blue` / `mix` / default */
    theme?: ClaudeTheme;
    /** Extra CSS classes for the wrapper */
    className?: string;
}

const THEMES = {
    default: {
        primary: '/images/claude/claude_1.png',
        base: '/images/claude/claude2.png',
    },
    blue: {
        primary: '/images/claude/claude_blue_1.png',
        base: '/images/claude/claude_blue_2.png',
    },
    mix: {
        primary: '/images/claude/claude_1.png',
        base: '/images/claude/claude_blue_2.png',
        secondary: '/images/claude/claude_blue_1.png',
    },
} as const;

const EXTRA_TYPE_IMAGES = [
    '/images/claude/claude_type_2.png',
    '/images/claude/claude_type_3.png',
    '/images/claude/claude_type_4.png',
];

/**
 * Fully responsive Claude-style cloud background.
 * Desktop: drifting landscape strips.
 * Mobile: lightweight rotated + scaled Claude (2 layers only).
 */
export default function CloudAnimation({
    height = 55,
    opacity = 0.9,
    speed = 28,
    theme = 'default',
    className = '',
}: CloudHeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [extraLayers, setExtraLayers] = useState<string[]>([]);

    const duration = `${Math.max(speed, 4)}s`;
    const assets = THEMES[theme] ?? THEMES.default;
    const { primary, base } = assets;
    const secondary = 'secondary' in assets ? assets.secondary : primary;

    useEffect(() => {
        if (!containerRef.current) return;

        const parentEl = containerRef.current.parentElement || containerRef.current;

        const updateLayers = () => {
            if (!parentEl) return;
            if (window.matchMedia('(max-width: 639px)').matches) {
                setExtraLayers([]);
                return;
            }
            const parentHeight = parentEl.clientHeight || parentEl.offsetHeight || 800;
            const vh = window.innerHeight || 800;
            const parentVhRatio = parentHeight / vh;

            if (parentVhRatio > 1.0) {
                const extraCount = Math.ceil(parentVhRatio - 1.0);
                const layers: string[] = [];
                for (let i = 0; i < extraCount; i++) {
                    layers.push(EXTRA_TYPE_IMAGES[i % EXTRA_TYPE_IMAGES.length]);
                }
                setExtraLayers(layers);
            } else {
                setExtraLayers([]);
            }
        };

        updateLayers();

        const observer = new ResizeObserver(updateLayers);
        observer.observe(parentEl);
        window.addEventListener('resize', updateLayers);
        window.addEventListener('orientationchange', updateLayers);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', updateLayers);
            window.removeEventListener('orientationchange', updateLayers);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
            aria-hidden
        >
            <MobileClaude
                primary={primary}
                base={base}
                blue={THEMES.blue.primary}
                speed={speed}
            />

            <div className="hidden sm:block absolute inset-0 overflow-hidden">
                <div
                    className="absolute inset-x-0 bottom-0 w-full overflow-hidden"
                    style={{
                        height: `${height}%`,
                        opacity,
                        maskImage:
                            'linear-gradient(to top, #000 0%, #000 75%, transparent 100%)',
                        WebkitMaskImage:
                            'linear-gradient(to top, #000 0%, #000 75%, transparent 100%)',
                    }}
                >
                    <div
                        className="claude-float-ltr absolute inset-y-0 left-0 flex h-full w-[200%] will-change-transform"
                        style={{
                            animationDuration: `${Math.max(speed * 1.8, 6)}s`,
                            opacity: 0.85,
                        }}
                    >
                        <GlowStrip src={base} />
                        <GlowStrip src={base} />
                    </div>

                    <div
                        className="claude-float-ltr absolute inset-y-0 left-0 flex h-full w-[200%] will-change-transform"
                        style={{ animationDuration: duration }}
                    >
                        <GlowStrip src={primary} />
                        <GlowStrip src={primary} />
                    </div>

                    <div
                        className="claude-float-rtl absolute inset-y-0 left-0 flex h-full w-[200%] will-change-transform"
                        style={{
                            animationDuration: `${Math.max(speed * 1.55, 6)}s`,
                            opacity: 0.45,
                        }}
                    >
                        <GlowStrip src={secondary} flip />
                        <GlowStrip src={secondary} flip />
                    </div>
                </div>

                {extraLayers.map((imageSrc, index) => {
                    const topOffsetVh = 100 + index * 100;
                    return (
                        <div
                            key={index}
                            className="absolute inset-x-0 w-full h-[100vh] overflow-hidden pointer-events-none"
                            style={{
                                top: `${topOffsetVh}vh`,
                                opacity: opacity * 0.75,
                                maskImage:
                                    'linear-gradient(to bottom, transparent 0%, #000 15%, #000 85%, transparent 100%)',
                                WebkitMaskImage:
                                    'linear-gradient(to bottom, transparent 0%, #000 15%, #000 85%, transparent 100%)',
                            }}
                        >
                            <Image
                                src={imageSrc}
                                alt=""
                                fill
                                priority={false}
                                sizes="100vw"
                                draggable={false}
                                className="select-none object-cover object-center"
                                style={{ mixBlendMode: 'screen' }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

type MobileSpot = {
    src: string;
    top: string;
    left?: string;
    right?: string;
    width: string;
    anim: 'a' | 'b';
    duration: string;
};

function randomMobileSpots(primary: string, base: string, blue: string, speed: number): MobileSpot[] {
    const srcs = [primary, base, primary, blue];
    return srcs.map((src, i) => {
        const onLeft = i % 2 === 0;
        const top = 18 + Math.random() * 58;
        const inset = -(20 + Math.random() * 30);
        const width = 70 + Math.random() * 35;
        return {
            src,
            top: `${top}vh`,
            ...(onLeft ? { left: `${inset}%` } : { right: `${inset}%` }),
            width: `${width}vw`,
            anim: i % 2 === 0 ? 'a' : 'b',
            duration: `${5 + i * 1.2}s`,
        };
    });
}

const DEFAULT_MOBILE_SPOTS: Omit<MobileSpot, 'src' | 'duration'>[] = [
    { top: '22vh', left: '-38%', width: '82vw', anim: 'a' },
    { top: '48vh', right: '-34%', width: '88vw', anim: 'b' },
    { top: '70vh', left: '-26%', width: '74vw', anim: 'a' },
    { top: '36vh', right: '-42%', width: '90vw', anim: 'b' },
];

/** Phone-only: 4 Claudes (one blue), 60% opacity, scattered left/right. */
function MobileClaude({
    primary,
    base,
    blue,
    speed,
}: {
    primary: string;
    base: string;
    blue: string;
    speed: number;
}) {
    const sources = [primary, base, primary, blue];
    const [spots, setSpots] = useState<MobileSpot[]>(() =>
        DEFAULT_MOBILE_SPOTS.map((spot, i) => ({
            ...spot,
            src: sources[i],
            duration: `${5 + i * 1.2}s`,
        })),
    );

    useEffect(() => {
        setSpots(randomMobileSpots(primary, base, blue, speed));
    }, [primary, base, blue, speed]);

    return (
        <div className="absolute inset-0 overflow-hidden sm:hidden">
            {spots.map((spot, i) => (
                <div
                    key={`${spot.src}-${i}`}
                    className="absolute max-w-none"
                    style={{
                        top: spot.top,
                        left: spot.left,
                        right: spot.right,
                        width: spot.width,
                        mixBlendMode: 'screen',
                        opacity: 0.6,
                        animationName:
                            spot.anim === 'a' ? 'claude-mobile-a' : 'claude-mobile-b',
                        animationDuration: spot.duration,
                        animationTimingFunction: 'linear',
                        animationIterationCount: 'infinite',
                        animationDirection: 'alternate',
                    }}
                >
                    <img
                        src={spot.src}
                        alt=""
                        className="block h-auto w-full max-w-none select-none"
                        draggable={false}
                    />
                </div>
            ))}
        </div>
    );
}

function GlowStrip({ src, flip = false }: { src: string; flip?: boolean }) {
    return (
        <div className="relative h-full w-1/2 shrink-0 overflow-hidden">
            <div
                className={`absolute inset-0 ${flip ? '-scale-x-100' : ''}`}
            >
                <Image
                    src={src}
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    draggable={false}
                    className="select-none object-cover object-center"
                    style={{ mixBlendMode: 'screen' }}
                />
            </div>
        </div>
    );
}
