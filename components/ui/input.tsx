import * as React from 'react';
import { Input as InputPrimitive } from '@base-ui/react/input';
import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        'h-11 sm:h-12 w-full min-w-0 rounded-2xl border border-sky-200/80 bg-sky-50/50 px-4 py-3 text-slate-900 text-sm font-normal transition-all duration-200 outline-none placeholder:text-slate-400 focus-visible:border-[var(--blue-normal)] focus-visible:ring-2 focus-visible:ring-[var(--blue-normal)]/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-rose-500 aria-invalid:ring-2 aria-invalid:ring-rose-500/20',
        className
      )}
      {...props}
    />
  );
}

export { Input };
