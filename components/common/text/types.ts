import { ElementType, HTMLAttributes, ReactNode } from 'react';

/**
 * Available typography variants based on the design system breakdown of Mahir Invest.
 */
export type TextVariant =
  | 'hero-title'     // Hero H1 text (e.g., "Careers") - text-4xl sm:text-5xl md:text-6xl lg:text-7xl
  | 'hero-syne'      // Hero H1 text with Syne font - font-syne text-4xl sm:text-5xl md:text-6xl lg:text-7xl
  | 'section-title'  // Section H2 text (e.g., "Our Perks And Benefits") - text-2xl sm:text-3xl md:text-4xl
  | 'card-title'     // Card H3 title (e.g., "We're not hiring right now") - text-xl sm:text-2xl md:text-3xl
  | 'feature-title'  // Feature H4 heading (e.g., "Flexible Timings") - text-base sm:text-lg md:text-xl
  | 'eyebrow'        // Upper kicker/badge label (e.g., "JOIN OUR MISSION") - text-xs sm:text-sm uppercase tracking-widest
  | 'subtitle'       // Hero subtitle / lead text (e.g., "Learn about life at MAHIR...") - text-base sm:text-lg md:text-xl
  | 'body-lg'        // Large body text - text-sm sm:text-base md:text-lg
  | 'body-md'        // Regular body text - text-sm sm:text-base
  | 'body-sm'        // Small text / caption - text-xs sm:text-sm
  | 'legal'          // Micro fine print / footer disclosures - text-[10px] sm:text-xs
  | 'nav-link';      // Navigation item & button typography - text-xs sm:text-sm font-medium

/**
 * Font family options
 */
export type FontFamily = 'sans' | 'inter' | 'syne' | 'mono';

/**
 * Font weight options
 */
export type FontWeight =
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold';

/**
 * Text alignment options
 */
export type TextAlign = 'left' | 'center' | 'right' | 'justify';

/**
 * Text color preset themes
 */
export type TextColor =
  | 'default'      // Uses current text color inheritance
  | 'primary'      // Primary high contrast text
  | 'secondary'    // Muted / secondary body text
  | 'muted'        // Subtle / light gray text
  | 'accent'       // Brand accent text (e.g. cyan/blue)
  | 'inverse'      // White text for dark backgrounds
  | 'gradient';    // Gradient text fill effect

/**
 * Props for the modular `<Text>` component
 */
export interface TextProps extends HTMLAttributes<HTMLElement> {
  /** The typography variant defining default size, tracking, leading, and font weight */
  variant?: TextVariant;
  /** Font family override */
  font?: FontFamily;
  /** HTML element to render (defaults to semantic tag mapped to variant) */
  as?: ElementType;
  /** Override font weight */
  weight?: FontWeight;
  /** Override text alignment */
  align?: TextAlign;
  /** Color theme preset or custom CSS color class */
  color?: TextColor;
  /** Custom additional CSS classes */
  className?: string;
  /** React children node */
  children: ReactNode;
}
