import { ElementType, HTMLAttributes, ReactNode } from 'react';

export type GlassCardVariant = 'pure-glass' | 'frosted' | 'dark' | 'light' | 'cyan' | 'emerald';

export type GlassCardRounded =
  | 'none'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | 'full';

export type GlassCardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export type GlassCardBlur = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export interface GlassCardProps extends HTMLAttributes<HTMLElement> {
  /** Visual theme preset of the glassmorphic card ('pure-glass' | 'frosted') */
  variant?: GlassCardVariant;
  /** Corner radius style */
  rounded?: GlassCardRounded;
  /** Inner padding size */
  padding?: GlassCardPadding;
  /** Backdrop blur strength */
  blur?: GlassCardBlur;
  /** Enable elevation lift and enhanced shadow on hover */
  hoverable?: boolean;
  /** Enable interactive cursor and active scale response */
  interactive?: boolean;
  /** Enable subtle ambient glow behind card */
  glow?: boolean;
  /** Polygon / HTML element tag to render as (defaults to 'div') */
  as?: ElementType;
  /** Custom additional CSS classes */
  className?: string;
  /** React children elements */
  children?: ReactNode;
}
