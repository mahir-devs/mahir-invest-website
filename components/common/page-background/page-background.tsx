'use client';

import React from 'react';
import Image from 'next/image';
import CloudAnimation from '@/components/animations/ClaudeAnimation';

export type PageBackgroundType = 'solid' | 'mix';

export interface PageBackgroundProps {
    /** Background color (default #96DAED) */
    color?: string;
    /** `mix` adds Claude mist + static corner glows */
    type?: PageBackgroundType;
    /** Extra CSS classes */
    className?: string;
}

const CORNER_IMAGES = [
    '/images/claude/claude_1.png',
    '/images/claude/claude2.png',
    '/images/claude/claude_blue_1.png',
    '/images/claude/claude_blue_2.png',
] as const;

/** Static corner placements — slight offset so they feel scattered, no motion */
const CORNER_SPOTS = [
    { src: CORNER_IMAGES[0], className: 'left-[-8%] top-[12%] h-[220px] w-[320px] sm:h-[280px] sm:w-[400px] opacity-70' },
    { src: CORNER_IMAGES[1], className: 'right-[-10%] top-[28%] h-[200px] w-[300px] sm:h-[260px] sm:w-[380px] opacity-55' },
    { src: CORNER_IMAGES[2], className: 'left-[-6%] bottom-[22%] h-[240px] w-[340px] sm:h-[300px] sm:w-[420px] opacity-65' },
    { src: CORNER_IMAGES[3], className: 'right-[-8%] bottom-[8%] h-[210px] w-[310px] sm:h-[270px] sm:w-[390px] opacity-60' },
] as const;

/**
 * Full-bleed absolute background for a relative parent.
 * `type="mix"` layers Claude animation + static corner glows.
 */
export function PageBackground({
    color = '#96DAED',
    type = 'solid',
    className = '',
}: PageBackgroundProps) {
    return (
        <div
            className={`pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden ${className}`}
            style={{ backgroundColor: color }}
            aria-hidden
        >
            {type === 'mix' && (
                <>
                    <CloudAnimation theme="mix" height={100} opacity={0.9} speed={30} />

                    {CORNER_SPOTS.map((spot, i) => (
                        <div
                            key={i}
                            className={`absolute ${spot.className}`}
                        >
                            <Image
                                src={spot.src}
                                alt=""
                                fill
                                sizes="420px"
                                draggable={false}
                                className="select-none object-contain"
                                style={{ mixBlendMode: 'screen' }}
                            />
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

export default PageBackground;
