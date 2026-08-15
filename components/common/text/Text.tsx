import React, { forwardRef } from 'react';
import { TextProps } from './types';
import { DEFAULT_VARIANT_TAGS, getTextClasses } from './styles';

/**
 * Reusable, polymorphic `<Text>` component supporting all responsive typography variants.
 * Automatically selects appropriate semantic HTML tag based on variant if `as` prop is omitted.
 */
export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      variant = 'body-md',
      font,
      as,
      weight,
      align,
      color,
      className = '',
      children,
      ...rest
    },
    ref
  ) => {
    // Determine target HTML element tag
    const Component = as || DEFAULT_VARIANT_TAGS[variant] || 'p';

    // Calculate final CSS classes
    const combinedClasses = getTextClasses({
      variant,
      font,
      weight,
      align,
      color,
      className,
    });

    return (
      <Component ref={ref} className={combinedClasses} {...rest}>
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';
