'use client';

import React from 'react';
import { GlassCard } from '@/components/common/cards';
import { MotionItem } from '@/components/animations';
import { cn } from '@/lib/utils';

interface CalculatorInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  step?: number;
  min?: number;
  max?: number;
}

export const CalculatorInput: React.FC<CalculatorInputProps> = ({
  label,
  value,
  onChange,
  step = 1,
  min,
  max,
}) => (
  <div className="space-y-1.5">
    <label className="text-[11px] font-normal uppercase text-slate-500 tracking-wider block">
      {label}
    </label>
    <input
      type="number"
      step={step}
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full bg-white border border-slate-200/90 rounded-2xl px-4 py-3 text-slate-900 font-normal text-[13.9px] focus:outline-none focus:ring-2 focus:ring-[var(--blue-normal)] shadow-xs transition-all"
    />
  </div>
);

interface CalculatorHighlightProps {
  label: string;
  value: string;
  variant?: 'primary' | 'success' | 'warning';
}

export const CalculatorHighlight: React.FC<CalculatorHighlightProps> = ({
  label,
  value,
  variant = 'primary',
}) => (
  <div
    className={cn(
      'border rounded-2xl p-4 text-center space-y-1',
      variant === 'primary' && 'bg-sky-200/30 border-sky-200',
      variant === 'success' && 'bg-emerald-100/50 border-emerald-200',
      variant === 'warning' && 'bg-amber-100/50 border-amber-200'
    )}
  >
    <p className="text-[11px] font-semibold uppercase text-slate-500 tracking-wider">{label}</p>
    <p className="text-[26.6px] font-normal text-slate-900">{value}</p>
  </div>
);

interface DonutChartProps {
  centerLabel: string;
  centerValue: string;
  segments: { pct: number; color: string; label: string; value: string }[];
}

export const DonutChart: React.FC<DonutChartProps> = ({
  centerLabel,
  centerValue,
  segments,
}) => {
  let offset = 0;

  return (
    <div className="flex flex-col items-center justify-center space-y-4 pt-2">
      <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          {segments.map((seg, idx) => {
            const dashOffset = idx === 0 ? 0 : -offset;
            offset += seg.pct;
            return (
              <path
                key={seg.label}
                stroke={seg.color}
                strokeDasharray={`${seg.pct}, 100`}
                strokeDashoffset={dashOffset}
                strokeWidth="4.5"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
            {centerLabel}
          </span>
          <span className="text-lg sm:text-xl font-extrabold text-slate-900">{centerValue}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-700">
        {segments.map((seg) => (
          <div key={seg.label} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: seg.color }}
            />
            <div>
              <p className="text-[13px] text-slate-400">{seg.label}</p>
              <p className="font-normal text-slate-900">{seg.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface SummaryRow {
  label: string;
  value: string;
}

interface CalculatorCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  summaryRows?: SummaryRow[];
  direction?: 'up' | 'down';
}

export const CalculatorCard: React.FC<CalculatorCardProps> = ({
  title,
  subtitle,
  children,
  footer,
  summaryRows,
  direction = 'up',
}) => (
  <MotionItem direction={direction} distance={30} duration={0.65} className="w-full">
    <GlassCard
      variant="frosted"
      rounded="3xl"
      padding="none"
      className="border border-white/90 shadow-2xl p-6 sm:p-8 rounded-[32px] sm:rounded-[36px] overflow-hidden space-y-6 h-full flex flex-col justify-between"
    >
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-[18.6px] font-normal text-slate-900 tracking-tight">{title}</h2>
          <p className="text-xs text-slate-500 font-normal leading-relaxed">{subtitle}</p>
        </div>
        {children}
      </div>

      {footer}

      {summaryRows && summaryRows.length > 0 && (
        <div className="divide-y divide-slate-200/60 pt-2 text-xs sm:text-[11.8px]">
          {summaryRows.map((row) => (
            <div key={row.label} className="py-2.5 flex justify-between gap-4">
              <span className="text-slate-500 font-medium">{row.label}</span>
              <span className="font-normal text-slate-900 text-right">{row.value}</span>
            </div>
          ))}
        </div>
      )}
    </GlassCard>
  </MotionItem>
);

export const CalculatorGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto text-left">
    {children}
  </div>
);

export const FormulaBox: React.FC<{ title: string; formula: string }> = ({ title, formula }) => (
  <div className="bg-white/80 border border-slate-200/80 rounded-2xl p-4 space-y-1 font-mono pt-3">
    <p className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">{title}</p>
    <p className="text-xs text-slate-700 font-semibold leading-relaxed break-all">{formula}</p>
  </div>
);

export const InsightBanner: React.FC<{ children: React.ReactNode; hint?: string }> = ({
  children,
  hint,
}) => (
  <div className="bg-slate-200/80 border border-slate-400/20 rounded-2xl p-6 text-center space-y-1">
    <p className="text-[13px] font-normal text-slate-900">{children}</p>
    {hint && <p className="text-[10px] text-slate-400 font-normal">{hint}</p>}
  </div>
);
