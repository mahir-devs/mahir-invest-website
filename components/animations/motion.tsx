'use client';

import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

export type FadeDirection = 'up' | 'down' | 'left' | 'right' | 'center' | 'between' | 'scaleDown' | 'scaleUp';

export interface MotionContainerProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  /** Stagger delay between sequential children in seconds (default: 0.12) */
  staggerDelay?: number;
  /** Delay before initial sequence starts in seconds (default: 0) */
  delay?: number;
  /** Whether animation triggers only once when entering viewport (default: true) */
  viewportOnce?: boolean;
  /** Viewport margin offset threshold for scroll trigger (default: '-50px') */
  viewportMargin?: string;
  className?: string;
}

export interface MotionItemProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  /** Direction variant for fade transition: 'up' | 'down' | 'left' | 'right' | 'center' | 'between' */
  direction?: FadeDirection;
  /** Custom delay override for this item in seconds */
  delay?: number;
  /** Duration of transition in seconds (default: 0.55) */
  duration?: number;
  /** Distance in pixels for directional movement (default: 35) */
  distance?: number;
  /** Initial scale for 'center' or zoom direction (default: 0.88) */
  scale?: number;
  /** Whether to animate individually on scroll if not wrapped in a MotionContainer */
  standalone?: boolean;
  /** Viewport margin for standalone scroll trigger */
  viewportOnce?: boolean;
  className?: string;
}

// Parent Container Variants for Staggering Children
const containerVariants = (staggerDelay: number, delay: number): Variants => ({
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: delay,
      staggerChildren: staggerDelay,
    },
  },
});

// Calculate Initial Directional Hidden State
const getDirectionalVariants = (
  direction: FadeDirection,
  distance: number,
  scale: number,
  duration: number,
  delay?: number
): Variants => {
  let initialX: number | string = 0;
  let initialY: number | string = 0;
  let initialScale = 1;

  switch (direction) {
    case 'up':
      initialY = distance;
      break;
    case 'down':
      initialY = -distance;
      break;
    case 'left':
      initialX = distance;
      break;
    case 'right':
      initialX = -distance;
      break;
    case 'center':
      initialScale = scale;
      break;
    case 'scaleDown':
      initialScale = scale !== 0.88 ? scale : 1.28;
      break;
    case 'scaleUp':
      initialScale = scale !== 0.88 ? scale : 0.8;
      break;
    case 'between':
      initialY = distance * 0.5;
      initialScale = 0.95;
      break;
    default:
      initialY = distance;
  }

  return {
    hidden: {
      opacity: 0,
      x: initialX,
      y: initialY,
      scale: initialScale,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 24,
        stiffness: 180,
        duration: duration,
        ...(delay !== undefined && { delay }),
      },
    },
  };
};

/**
 * MotionContainer
 * Wraps child MotionItems and automatically sequences & staggers their entrance animations on scroll.
 */
export const MotionContainer: React.FC<MotionContainerProps> = ({
  children,
  staggerDelay = 0.12,
  delay = 0,
  viewportOnce = true,
  viewportMargin = '-50px',
  className = '',
  ...props
}) => {
  return (
    <motion.div
      variants={containerVariants(staggerDelay, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: viewportOnce, margin: viewportMargin }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * MotionItem
 * Animates an element with direction presets ('up' | 'down' | 'left' | 'right' | 'center' | 'between').
 * Can be used inside a MotionContainer for staggered sequences or standalone with scroll trigger.
 */
export const MotionItem: React.FC<MotionItemProps> = ({
  children,
  direction = 'up',
  delay,
  duration = 0.55,
  distance = 35,
  scale = 0.88,
  standalone = false,
  viewportOnce = true,
  className = '',
  ...props
}) => {
  const itemVariants = getDirectionalVariants(
    direction,
    distance,
    scale,
    duration,
    delay
  );

  if (standalone) {
    return (
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: viewportOnce, margin: '-40px' }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div variants={itemVariants} className={cn(className)} {...props}>
      {children}
    </motion.div>
  );
};

export default MotionContainer;
