'use client';

import React, { useState } from 'react';

export default function FontsTestingPage() {
  const [sampleText, setSampleText] = useState('Build Wealth With Smarter Investment Guidance');
  const [fontSize, setFontSize] = useState<number>(32);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 sm:p-12 space-y-12 max-w-7xl mx-auto">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6 space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold font-mono uppercase tracking-widest bg-sky-950 text-sky-400 border border-sky-800 px-3 py-1 rounded-full">
            Typography System
          </span>
          <span className="text-xs font-mono text-slate-400">
            Global Inter Font Configuration
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-sans tracking-tight">
          Global Font Configuration: Inter Only
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl">
          The entire application uses <strong className="text-white font-bold">Inter</strong> (from <code>next/font/google</code>) for all body text, UI controls, navigation, and headings (h1–h6).
        </p>
      </header>

      {/* Font Summary Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-sky-400">Global Font Family</h2>
          <span className="text-xs font-mono bg-sky-950 text-sky-300 px-2.5 py-1 rounded border border-sky-800">
            font-sans / font-inter
          </span>
        </div>
        <p className="text-3xl font-extrabold tracking-tight text-white font-sans">
          Inter (Google Font)
        </p>
        <div className="text-xs text-slate-400 font-mono space-y-1 bg-slate-950 p-3 rounded-lg border border-slate-800/80">
          <div>• Variable: <code>--font-inter</code></div>
          <div>• Utility Classes: <code>font-sans</code>, <code>font-inter</code>, <code>font-heading</code></div>
          <div>• Scope: <code>html</code>, <code>body</code>, <code>h1-h6</code>, paragraphs, buttons & all UI controls</div>
        </div>
      </div>

      {/* Interactive Specimen Tester */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span>✨</span> Inter Live Specimen Tester
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Specimen Text
            </label>
            <input
              type="text"
              value={sampleText}
              onChange={(e) => setSampleText(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500 font-sans"
              placeholder="Type specimen text..."
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Font Size: {fontSize}px
            </label>
            <input
              type="range"
              min={16}
              max={64}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500 mt-3"
            />
          </div>
        </div>

        {/* Live Specimen Output */}
        <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-2 overflow-hidden">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block">
            Inter Specimen Render
          </span>
          <p
            className="font-sans font-bold text-white transition-all leading-tight break-words"
            style={{ fontSize: `${fontSize}px` }}
          >
            {sampleText || 'Specimen Text'}
          </p>
        </div>
      </section>

      {/* Inter Weights Breakdown */}
      <section className="space-y-4">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            Inter Weight Variations
          </h2>
          <span className="text-xs font-mono text-slate-400">
            Google Font Variable
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'Light (300)', weightClass: 'font-light' },
            { name: 'Normal (400)', weightClass: 'font-normal' },
            { name: 'Medium (500)', weightClass: 'font-medium' },
            { name: 'SemiBold (600)', weightClass: 'font-semibold' },
            { name: 'Bold (700)', weightClass: 'font-bold' },
            { name: 'ExtraBold (800)', weightClass: 'font-extrabold' },
          ].map((item) => (
            <div
              key={item.name}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2 hover:border-slate-700 transition"
            >
              <div className="text-xs font-mono text-sky-400">{item.name}</div>
              <p className={`font-sans ${item.weightClass} text-lg text-slate-100 leading-snug`}>
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HTML Heading Tag Rendering */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <h2 className="text-2xl font-bold text-white">
            HTML Heading Tags (h1 - h6)
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            All heading elements render natively with <strong>Inter</strong>.
          </p>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold text-white">H1 Heading - Inter ExtraBold</h1>
          <h2 className="text-3xl font-bold text-white">H2 Heading - Inter Bold</h2>
          <h3 className="text-2xl font-semibold text-white">H3 Heading - Inter SemiBold</h3>
          <h4 className="text-xl font-medium text-white">H4 Heading - Inter Medium</h4>
          <h5 className="text-lg font-normal text-white">H5 Heading - Inter Regular</h5>
          <h6 className="text-base font-normal text-slate-300">H6 Heading - Inter Subheading</h6>
        </div>
      </section>
    </div>
  );
}


