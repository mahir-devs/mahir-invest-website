import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionDividerProps {
    /** Height of the gradient band (default 80 → h-20) */
    heightClassName?: string;
    /** Mid color of the gradient (default white) */
    viaColor?: string;
    /** Extra classes on the outer wrapper */
    className?: string;
}

/**
 * Zero-height section seam with a centered absolute fade:
 * transparent → viaColor → transparent
 */
export function SectionDivider({
    heightClassName = 'h-20',
    viaColor = 'white',
    className = '',
}: SectionDividerProps) {
    return (
        <div className={cn('relative z-20 h-0 w-full', className)} aria-hidden>
            <div
                className={cn(
                    'pointer-events-none absolute  left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2',
                    heightClassName
                )}
                style={{
                    backgroundImage: `linear-gradient(to bottom, transparent, ${viaColor}, transparent)`,
                }}
            />
        </div>
    );
}

export default SectionDivider;
