'use client';

import React, { useState } from 'react';
import { GlassButton } from '@/components/ui/glass-button';
import {
  TrendingUp,
  ArrowUpRight,
  Download,
  Sparkles,
  PhoneCall,
  Check,
  Zap,
} from 'lucide-react';

export default function GlassButtonTestPage() {
  const [dynamicTitle, setDynamicTitle] = useState('Download Our App');
  const [selectedVariant, setSelectedVariant] = useState<'dark' | 'light' | 'cyan' | 'emerald'>('dark');
  const [selectedSize, setSelectedSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [selectedIconName, setSelectedIconName] = useState<string>('TrendingUp');
  const [iconBgColor, setIconBgColor] = useState<string>('bg-[#16a34a]');
  const [iconPosition, setIconPosition] = useState<'right' | 'left'>('right');

  const iconOptions: Record<string, React.ReactNode> = {
    TrendingUp: <TrendingUp className="stroke-[2.5]" />,
    ArrowUpRight: <ArrowUpRight className="stroke-[2.5]" />,
    Download: <Download className="stroke-[2.5]" />,
    Sparkles: <Sparkles className="stroke-[2.5]" />,
    PhoneCall: <PhoneCall className="stroke-[2.5]" />,
    Check: <Check className="stroke-[2.5]" />,
    Zap: <Zap className="stroke-[2.5]" />,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 sm:p-12 space-y-12 max-w-7xl mx-auto">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold font-mono uppercase tracking-widest bg-sky-950 text-sky-400 border border-sky-800 px-3 py-1 rounded-full">
            UI Components
          </span>
          <span className="text-xs font-mono text-slate-400">
            GlassButton Component Verification
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Glassmorphism Pill Button
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl">
          A separate, reusable <code>&lt;GlassButton /&gt;</code> component supporting dynamic titles, customizable circular icons, background colors, and glass variants.
        </p>
      </header>

      {/* 1. Exact Match to User Image Section */}
      <section className="space-y-4">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            📸 Exact Match to Design Mockup
          </h2>
          <span className="text-xs font-mono text-sky-400">
            Rendered on Cyan/Blue Glass Canvas
          </span>
        </div>

        {/* Realistic Cyan/Blue Canvas as seen in the image */}
        <div className="rounded-3xl bg-gradient-to-r from-[#1691cb] via-[#1b93cf] to-[#178ec6] p-10 sm:p-16 flex flex-wrap items-center justify-center gap-6 shadow-2xl border border-sky-400/30">
          {/* Left Glass Button ("Download Our App") */}
          <GlassButton
            variant="dark"
            size="md"
            label="Download Our App"
            icon={<TrendingUp className="size-4 stroke-[2.5]" />}
            iconBgColor="bg-[#16a34a]"
          />

          {/* Right Glass Button ("Find your Plan") */}
          <GlassButton
            variant="light"
            size="md"
            label="Find your Plan"
            icon={<TrendingUp className="size-4 stroke-[2.5]" />}
            iconBgColor="bg-[#16a34a]"
          />
        </div>
      </section>

      {/* 2. Interactive Dynamic Playground */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span>⚙️</span> Interactive Component Playground
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Dynamic Title Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Dynamic Button Title
            </label>
            <input
              type="text"
              value={dynamicTitle}
              onChange={(e) => setDynamicTitle(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500 font-sans"
              placeholder="Enter button text..."
            />
          </div>

          {/* Variant Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Glass Variant
            </label>
            <select
              value={selectedVariant}
              onChange={(e) => setSelectedVariant(e.target.value as any)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
            >
              <option value="dark">Dark Glass (Left in Image)</option>
              <option value="light">Light Glass (Right in Image)</option>
              <option value="cyan">Deep Cyan Glass</option>
              <option value="emerald">Emerald Glass</option>
            </select>
          </div>

          {/* Size Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Button Size
            </label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value as any)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
            >
              <option value="sm">Small (h-9)</option>
              <option value="md">Medium (h-11 - Default)</option>
              <option value="lg">Large (h-14)</option>
            </select>
          </div>

          {/* Dynamic Icon Picker */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Dynamic Icon
            </label>
            <select
              value={selectedIconName}
              onChange={(e) => setSelectedIconName(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
            >
              <option value="TrendingUp">TrendingUp (Default Green Arrow)</option>
              <option value="ArrowUpRight">ArrowUpRight</option>
              <option value="Download">Download Icon</option>
              <option value="Sparkles">Sparkles Icon</option>
              <option value="PhoneCall">PhoneCall Icon</option>
              <option value="Check">Checkmark Icon</option>
              <option value="Zap">Lightning Zap Icon</option>
            </select>
          </div>

          {/* Icon Background Color */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Icon Circle Color
            </label>
            <select
              value={iconBgColor}
              onChange={(e) => setIconBgColor(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
            >
              <option value="bg-[#16a34a]">Vibrant Green (#16a34a)</option>
              <option value="bg-sky-600">Sky Blue (bg-sky-600)</option>
              <option value="bg-purple-600">Royal Purple (bg-purple-600)</option>
              <option value="bg-amber-500">Amber Orange (bg-amber-500)</option>
              <option value="bg-rose-600">Rose Red (bg-rose-600)</option>
            </select>
          </div>

          {/* Icon Position */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Icon Position
            </label>
            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={() => setIconPosition('right')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition ${
                  iconPosition === 'right'
                    ? 'bg-sky-900/60 border-sky-500 text-sky-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                Right (Default)
              </button>
              <button
                type="button"
                onClick={() => setIconPosition('left')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition ${
                  iconPosition === 'left'
                    ? 'bg-sky-900/60 border-sky-500 text-sky-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                Left Side
              </button>
            </div>
          </div>
        </div>

        {/* Live Preview Canvas */}
        <div className="pt-6 border-t border-slate-800">
          <div className="text-xs font-mono text-slate-400 mb-3">
            Live Component Render:
          </div>

          <div className="p-12 rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-700 flex items-center justify-center min-h-[140px] shadow-inner">
            <GlassButton
              variant={selectedVariant}
              size={selectedSize}
              label={dynamicTitle}
              icon={iconOptions[selectedIconName]}
              iconBgColor={iconBgColor}
              iconPosition={iconPosition}
            />
          </div>
        </div>
      </section>

      {/* Code Usage Examples */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <h3 className="text-lg font-bold text-white">
          💻 Usage Snippet
        </h3>

        <pre className="bg-slate-950 p-4 rounded-xl text-xs font-mono text-sky-300 overflow-x-auto border border-slate-800">
{`import { GlassButton } from '@/components/ui/glass-button';
import { Download } from 'lucide-react';

// Left Dark Glass Variant (as in mockup)
<GlassButton
  variant="dark"
  label="${dynamicTitle}"
/>

// Right Light Glass Variant (as in mockup)
<GlassButton
  variant="light"
  label="Find your Plan"
/>

// Dynamic Icon & Background Color
<GlassButton
  variant="dark"
  label="Download App"
  icon={<Download className="size-4" />}
  iconBgColor="bg-sky-600"
/>`}
        </pre>
      </section>
    </div>
  );
}
