'use client';

import React, { useState } from 'react';
import { GlassCard, GlassCardVariant, GlassCardRounded, GlassCardPadding, GlassCardBlur } from '@/components/ui/glass-card';
import { ShieldCheck, CheckCircle } from 'lucide-react';

export default function GlassCardTestPage() {
  const [selectedVariant, setSelectedVariant] = useState<GlassCardVariant>('pure-glass');
  const [selectedRounded, setSelectedRounded] = useState<GlassCardRounded>('3xl');
  const [selectedPadding, setSelectedPadding] = useState<GlassCardPadding>('md');
  const [selectedBlur, setSelectedBlur] = useState<GlassCardBlur>('xl');
  const [isHoverable, setIsHoverable] = useState(true);
  const [isGlow, setIsGlow] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--blue-normal)] via-slate-900 to-slate-950 text-white font-sans p-6 sm:p-12 space-y-12 select-none">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs font-mono text-sky-400 bg-sky-950 px-3 py-1 rounded-full border border-sky-800">
            UI Primitive Component
          </span>
          <h1 className="text-3xl font-extrabold text-white mt-2">
            Pure-Glass & Frosted GlassCard Showcase
          </h1>
          <p className="text-slate-300 text-sm mt-1">
            Parameter-controlled glassmorphic card wrapping dynamic children.
          </p>
        </div>
      </div>

      {/* Main Interactive Controls & Preview Section */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Panel (Left Col) */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-6 shadow-2xl">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span>⚙️</span> Card Style Controls
          </h2>

          {/* Variant Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
              1. Theme Variant (`variant`)
            </label>
            <div className="flex flex-wrap gap-2">
              {(['pure-glass', 'frosted'] as GlassCardVariant[]).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setSelectedVariant(v)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition ${
                    selectedVariant === v
                      ? 'bg-sky-500 text-white shadow-md'
                      : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Rounded Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
              2. Corner Radius (`rounded`)
            </label>
            <div className="flex flex-wrap gap-2">
              {(['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'] as GlassCardRounded[]).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setSelectedRounded(r)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition ${
                    selectedRounded === r
                      ? 'bg-sky-600 text-white shadow-md'
                      : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Padding Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
              3. Inner Padding (`padding`)
            </label>
            <div className="flex flex-wrap gap-2">
              {(['none', 'sm', 'md', 'lg', 'xl'] as GlassCardPadding[]).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setSelectedPadding(p)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium uppercase transition ${
                    selectedPadding === p
                      ? 'bg-sky-600 text-white shadow-md'
                      : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Toggles */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <label className="text-xs font-medium text-slate-300 cursor-pointer flex items-center gap-2">
              <input
                type="checkbox"
                checked={isHoverable}
                onChange={(e) => setIsHoverable(e.target.checked)}
                className="rounded text-sky-600 focus:ring-sky-500"
              />
              Hover Elevation (`hoverable`)
            </label>

            <label className="text-xs font-medium text-slate-300 cursor-pointer flex items-center gap-2">
              <input
                type="checkbox"
                checked={isGlow}
                onChange={(e) => setIsGlow(e.target.checked)}
                className="rounded text-sky-600 focus:ring-sky-500"
              />
              Background Glow (`glow`)
            </label>
          </div>
        </div>

        {/* Live Card Render Preview (Right Col) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-slate-950/50 p-8 sm:p-12 rounded-3xl border border-slate-800 flex items-center justify-center min-h-[380px]">
            <GlassCard
              variant={selectedVariant}
              rounded={selectedRounded}
              padding={selectedPadding}
              blur={selectedBlur}
              hoverable={isHoverable}
              glow={isGlow}
              className="max-w-md w-full"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-400/30">
                    <ShieldCheck className="size-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    SEBI Regulated
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold">
                    {selectedVariant === 'pure-glass' ? 'Pure-Glass Card' : 'Frosted Glass Card'}
                  </h3>
                  <p className="text-xs opacity-80 leading-relaxed">
                    Custom modular glass card wrapping dynamic children content with parameters-controlled styles.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-medium opacity-90">
                    <CheckCircle className="size-4 text-emerald-400" />
                    <span>Zero Commissions</span>
                  </div>
                  <span className="font-mono text-sky-300 font-bold">₹ 0 Direct</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Usage Code Snippet */}
          <div className="bg-slate-900 border border-slate-800 text-slate-100 rounded-3xl p-6 space-y-3">
            <h3 className="text-sm font-bold text-white">
              💻 Code Usage Snippet
            </h3>
            <pre className="bg-slate-950 p-4 rounded-2xl text-xs font-mono text-sky-300 overflow-x-auto border border-slate-800">
{`import { GlassCard } from '@/components/ui/glass-card';

<GlassCard
  variant="${selectedVariant}"
  rounded="${selectedRounded}"
  padding="${selectedPadding}"
  hoverable={${isHoverable}}
  glow={${isGlow}}
>
  <h3>Custom Card Title</h3>
  <p>Wrapped children content...</p>
</GlassCard>`}
            </pre>
          </div>
        </div>
      </main>

      {/* Grid Showcase of Both Variants */}
      <section className="max-w-7xl mx-auto space-y-6 pt-6">
        <h2 className="text-2xl font-bold text-white">
          Variant Presets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(['pure-glass', 'frosted'] as GlassCardVariant[]).map((v) => (
            <GlassCard
              key={v}
              variant={v}
              padding="lg"
              hoverable
              glow
              className="space-y-4"
            >
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
                Variant: &quot;{v}&quot;
              </div>
              <h3 className="text-2xl font-bold">
                {v === 'pure-glass' ? 'Pure-Glass Card' : 'Frosted Glass Card'}
              </h3>
              <p className="text-sm opacity-80 leading-relaxed">
                {v === 'pure-glass'
                  ? 'Crystal-clear transparent glass aesthetic with subtle border highlight and ambient light reflection.'
                  : 'Rich translucent frosted glass aesthetic with backdrop blur and soft shadow elevation.'}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
