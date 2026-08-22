import { ElementType } from 'react';
import { FontFamily, FontWeight, TextAlign, TextColor, TextVariant } from './types';

/**
 * Mapping of default HTML tags for each typography variant
 */
export const DEFAULT_VARIANT_TAGS: Record<TextVariant, ElementType> = {
  'hero-title': 'h1',
  'hero-syne': 'h1',
  'section-title': 'h2',
  'card-title': 'h3',
  'feature-title': 'h4',
  'eyebrow': 'span',
  'subtitle': 'p',
  'body-lg': 'p',
  'body-md': 'p',
  'body-sm': 'p',
  'legal': 'p',
  'nav-link': 'span',
};

/**
 * Responsive Tailwind CSS style mappings for each text variant
 */
export const VARIANT_STYLES: Record<TextVariant, string> = {
  'hero-title':
    'text-3xl sm:text-[60px] md:text-[60px] lg:text-[60px] font-normal tracking-[-2.67px] leading-[124%]',

  'hero-syne':
    'font-syne text-3xl sm:text-5xl md:text-6xl lg:text-[67px] font-extrabold tracking-tight leading-[1.15]',

  'section-title':
    'text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug',

  'card-title':
    'text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight leading-snug',

  'feature-title':
    'text-base sm:text-lg md:text-xl font-semibold tracking-normal leading-snug',

  'eyebrow':
    'text-xs sm:text-sm font-semibold tracking-widest uppercase text-sky-400 dark:text-sky-300',

  'subtitle':
    'text-base sm:text-[10.73px] md:text-[16.73px] font-normal leading-relaxed text-slate-300 dark:text-slate-300',

  'body-lg':
    'text-sm sm:text-base md:text-lg font-normal leading-relaxed',

  'body-md':
    'text-sm sm:text-[15px] font-normal leading-relaxed',

  'body-sm':
    'text-xs sm:text-[8.6px] font-normal leading-normal',

  'legal':
    'text-[10px] sm:text-xs font-light leading-normal opacity-75',

  'nav-link':
    'text-xs sm:text-sm font-medium tracking-wide',
};

/**
 * Font family class mapping
 */
export const FONT_STYLES: Record<FontFamily, string> = {
  sans: 'font-sans',
  inter: 'font-sans',
  syne: 'font-syne',
  mono: 'font-mono',
};

/**
 * Font weight class mapping
 */
export const WEIGHT_STYLES: Record<FontWeight, string> = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
};

/**
 * Text alignment class mapping
 */
export const ALIGN_STYLES: Record<TextAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

/**
 * Color preset class mapping
 */
export const COLOR_STYLES: Record<TextColor, string> = {
  default: '',
  primary: 'text-slate-900 dark:text-white',
  secondary: 'text-slate-600 dark:text-slate-300',
  muted: 'text-slate-500 dark:text-slate-400',
  accent: 'text-sky-500 dark:text-sky-400',
  inverse: 'text-white',
  gradient:
    'bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent',
};

/**
 * Utility function to compute final concatenated class names
 */
export function getTextClasses(options: {
  variant?: TextVariant;
  font?: FontFamily;
  weight?: FontWeight;
  align?: TextAlign;
  color?: TextColor;
  className?: string;
}): string {
  const { variant = 'body-md', font, weight, align, color, className = '' } = options;

  const variantClass = VARIANT_STYLES[variant] || VARIANT_STYLES['body-md'];
  const fontClass = font ? FONT_STYLES[font] : '';
  const weightClass = weight ? WEIGHT_STYLES[weight] : '';
  const alignClass = align ? ALIGN_STYLES[align] : '';
  const colorClass = color ? COLOR_STYLES[color] : '';

  return [variantClass, fontClass, weightClass, alignClass, colorClass, className]
    .filter(Boolean)
    .join(' ');
}
