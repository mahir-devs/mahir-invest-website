'use client';

import React, { useState } from 'react';
import { Text, TextVariant, TextColor, FontWeight } from '@/components/common/text';
import { Button } from '@/components/ui/button';

interface VariantInfo {
  variant: TextVariant;
  name: string;
  defaultTag: string;
  mobileSize: string;
  desktopSize: string;
  classes: string;
  sampleText: string;
  usage: string;
}

const VARIANTS_LIST: VariantInfo[] = [
  {
    variant: 'hero-title',
    name: 'Hero Title (Display H1)',
    defaultTag: 'h1',
    mobileSize: '36px / 2.25rem (text-4xl)',
    desktopSize: '72px / 4.5rem (lg:text-7xl)',
    classes: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]',
    sampleText: 'Careers',
    usage: 'Main page titles and high-impact hero headings',
  },
  {
    variant: 'section-title',
    name: 'Section Title (Heading H2)',
    defaultTag: 'h2',
    mobileSize: '24px / 1.5rem (text-2xl)',
    desktopSize: '36px / 2.25rem (md:text-4xl)',
    classes: 'text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug',
    sampleText: 'Our Perks And Benefits',
    usage: 'Primary section titles throughout the landing page',
  },
  {
    variant: 'card-title',
    name: 'Card Title (Heading H3)',
    defaultTag: 'h3',
    mobileSize: '20px / 1.25rem (text-xl)',
    desktopSize: '30px / 1.875rem (md:text-3xl)',
    classes: 'text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight leading-snug',
    sampleText: "We're not hiring right now",
    usage: 'Notice cards, modal titles, and prominent block headings',
  },
  {
    variant: 'feature-title',
    name: 'Feature Title (Heading H4)',
    defaultTag: 'h4',
    mobileSize: '16px / 1rem (text-base)',
    desktopSize: '20px / 1.25rem (md:text-xl)',
    classes: 'text-base sm:text-lg md:text-xl font-semibold tracking-normal leading-snug',
    sampleText: 'Flexible Timings',
    usage: 'Feature card titles, perk names, and content group headers',
  },
  {
    variant: 'eyebrow',
    name: 'Eyebrow / Kicker Label',
    defaultTag: 'span',
    mobileSize: '12px / 0.75rem (text-xs)',
    desktopSize: '14px / 0.875rem (sm:text-sm)',
    classes: 'text-xs sm:text-sm font-semibold tracking-widest uppercase text-sky-400',
    sampleText: 'JOIN OUR MISSION',
    usage: 'Pre-heading kickers, tags, and category indicators',
  },
  {
    variant: 'subtitle',
    name: 'Subtitle / Lead Text',
    defaultTag: 'p',
    mobileSize: '16px / 1rem (text-base)',
    desktopSize: '20px / 1.25rem (md:text-xl)',
    classes: 'text-base sm:text-lg md:text-xl font-normal leading-relaxed text-slate-300',
    sampleText: 'Learn about life at MAHIR and the values that shape how we work.',
    usage: 'Subheadings placed directly under Hero or H1 titles',
  },
  {
    variant: 'body-lg',
    name: 'Body Large',
    defaultTag: 'p',
    mobileSize: '14px / 0.875rem (text-sm)',
    desktopSize: '18px / 1.125rem (md:text-lg)',
    classes: 'text-sm sm:text-base md:text-lg font-normal leading-relaxed',
    sampleText: 'We believe great work happens when people feel supported, trusted, and valued.',
    usage: 'Section intros, lead paragraphs, and key callout statements',
  },
  {
    variant: 'body-md',
    name: 'Body Medium (Default)',
    defaultTag: 'p',
    mobileSize: '14px / 0.875rem (text-sm)',
    desktopSize: '16px / 1rem (sm:text-base)',
    classes: 'text-sm sm:text-base font-normal leading-relaxed',
    sampleText: 'We trust you to manage your time. Work when you are most productive — early mornings or late nights, it is your call.',
    usage: 'Standard paragraph copy, card descriptions, and core text content',
  },
  {
    variant: 'body-sm',
    name: 'Body Small / Caption',
    defaultTag: 'p',
    mobileSize: '12px / 0.75rem (text-xs)',
    desktopSize: '14px / 0.875rem (sm:text-sm)',
    classes: 'text-xs sm:text-sm font-normal leading-normal',
    sampleText: 'Don\'t see your role? Email us at contact@mahir.in',
    usage: 'Secondary hints, secondary links, metadata, and helper text',
  },
  {
    variant: 'legal',
    name: 'Legal / Micro Fine Print',
    defaultTag: 'p',
    mobileSize: '10px (text-[10px])',
    desktopSize: '12px (sm:text-xs)',
    classes: 'text-[10px] sm:text-xs font-light leading-normal opacity-75',
    sampleText: 'SEBI Registered Investment Adviser - INA000022668 | CIN: U60160PN2025PTC244016',
    usage: 'Footer legal disclosures, copyright lines, and SEBI compliance notes',
  },
  {
    variant: 'nav-link',
    name: 'Nav Link / Button Text',
    defaultTag: 'span',
    mobileSize: '12px / 0.75rem (text-xs)',
    desktopSize: '14px / 0.875rem (sm:text-sm)',
    classes: 'text-xs sm:text-sm font-medium tracking-wide',
    sampleText: 'Talk to us',
    usage: 'Header navigation items, tabs, badges, and button labels',
  },
];

const PERKS_DATA = [
  {
    icon: '⏱️',
    title: 'Flexible Timings',
    desc: 'We trust you to manage your time. Work when you\'re most productive — early mornings or late nights, it\'s your call.',
  },
  {
    icon: '📚',
    title: 'Learning Budget',
    desc: 'Annual budget for courses, certifications, and conferences. We invest in your growth because it benefits everyone.',
  },
  {
    icon: '🏠',
    title: 'Remote Friendly',
    desc: 'Work from anywhere. We have team members across India and believe great work doesn\'t require a specific location.',
  },
  {
    icon: '💰',
    title: 'Performance Bonuses',
    desc: 'Hard work is recognized and rewarded. Quarterly bonuses tied to individual and team performance metrics.',
  },
  {
    icon: '👥',
    title: 'Small Team, Big Impact',
    desc: 'You won\'t be a cog in a machine. Every team member directly shapes the product and impacts thousands of investors.',
  },
  {
    icon: '❤️',
    title: 'Health Benefits',
    desc: 'Comprehensive health insurance for you and your family. Your well-being matters to us.',
  },
];

export default function TestingTypesPage() {
  const [selectedColor, setSelectedColor] = useState<TextColor>('default');
  const [customWeight, setCustomWeight] = useState<FontWeight | ''>('');
  const [simulatedWidth, setSimulatedWidth] = useState<'full' | 'mobile' | 'tablet'>('full');
  const [activeTab, setActiveTab] = useState<'specs' | 'mockup'>('specs');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-4 sm:p-8">
      {/* Top Header */}
      <header className="max-w-7xl mx-auto mb-10 pb-6 border-b border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <Text variant="eyebrow" color="accent">Design System Specs</Text>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-950 text-sky-400 border border-sky-800">
                Responsive Typography Types
              </span>
            </div>
            <Text variant="section-title" className="mt-1 text-white">
              Mahir Invest Typography System
            </Text>
            <Text variant="body-md" className="text-slate-400 mt-1">
              Responsive font sizes, leading, tracking, and element mappings analyzed from Mahir Invest Careers design.
            </Text>
          </div>

          {/* Tab Controls */}
          <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'specs'
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
            >
              📐 Types Specs & Breakdown
            </button>
            <button
              onClick={() => setActiveTab('mockup')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'mockup'
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
            >
              🖼️ Live Design Mockup Test
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto">
        {activeTab === 'specs' && (
          <div className="space-y-8">
            {/* Interactive Customization Bar */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <Text variant="feature-title" className="text-slate-200">
                ⚙️ Live Typography Controls & Overrides
              </Text>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {/* Viewport Width Simulator */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Simulate Device Viewport
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSimulatedWidth('full')}
                      className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition ${simulatedWidth === 'full'
                        ? 'bg-sky-900/60 border-sky-500 text-sky-300'
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
                        }`}
                    >
                      Desktop (Full)
                    </button>
                    <button
                      onClick={() => setSimulatedWidth('tablet')}
                      className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition ${simulatedWidth === 'tablet'
                        ? 'bg-sky-900/60 border-sky-500 text-sky-300'
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
                        }`}
                    >
                      Tablet (768px)
                    </button>
                    <button
                      onClick={() => setSimulatedWidth('mobile')}
                      className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition ${simulatedWidth === 'mobile'
                        ? 'bg-sky-900/60 border-sky-500 text-sky-300'
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
                        }`}
                    >
                      Mobile (375px)
                    </button>
                  </div>
                </div>

                {/* Color Override */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Color Preset Test
                  </label>
                  <select
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value as TextColor)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-slate-200 focus:outline-none focus:border-sky-500"
                  >
                    <option value="default">Default Inheritance</option>
                    <option value="primary">Primary (White/Slate-900)</option>
                    <option value="secondary">Secondary (Slate-300)</option>
                    <option value="muted">Muted (Slate-500)</option>
                    <option value="accent">Accent Sky Blue</option>
                    <option value="gradient">Gradient Fill</option>
                  </select>
                </div>

                {/* Font Weight Override */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Font Weight Override
                  </label>
                  <select
                    value={customWeight}
                    onChange={(e) => setCustomWeight(e.target.value as FontWeight | '')}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-slate-200 focus:outline-none focus:border-sky-500"
                  >
                    <option value="">Default Variant Weight</option>
                    <option value="light">Light (300)</option>
                    <option value="normal">Normal (400)</option>
                    <option value="medium">Medium (500)</option>
                    <option value="semibold">SemiBold (600)</option>
                    <option value="bold">Bold (700)</option>
                    <option value="extrabold">ExtraBold (800)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Typography Variants List */}
            <div
              className={`transition-all duration-300 mx-auto space-y-6 ${simulatedWidth === 'mobile'
                ? 'max-w-[375px]'
                : simulatedWidth === 'tablet'
                  ? 'max-w-[768px]'
                  : 'max-w-full'
                }`}
            >
              {VARIANTS_LIST.map((item) => (
                <div
                  key={item.variant}
                  className="bg-slate-900/80 backdrop-blur border border-slate-800 hover:border-slate-700 transition rounded-2xl p-6 shadow-md"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-sky-950 text-sky-400 border border-sky-800 font-semibold">
                        variant=&quot;{item.variant}&quot;
                      </span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                        as=&quot;{item.defaultTag}&quot;
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                      <span>📱 Mobile: <strong className="text-slate-200">{item.mobileSize}</strong></span>
                      <span>💻 Desktop: <strong className="text-sky-300">{item.desktopSize}</strong></span>
                    </div>
                  </div>

                  {/* Rendered Typography Preview */}
                  <div className="py-3 px-4 bg-slate-950/60 rounded-xl border border-slate-850 my-3 overflow-x-auto">
                    <Text
                      variant={item.variant}
                      color={selectedColor !== 'default' ? selectedColor : undefined}
                      weight={customWeight || undefined}
                    >
                      {item.sampleText}
                    </Text>
                  </div>

                  {/* Code Specs Footer */}
                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-2">
                    <div>
                      <span className="text-slate-500 font-semibold uppercase tracking-wider">Usage: </span>
                      <span className="text-slate-300">{item.usage}</span>
                    </div>
                    <div className="font-mono text-[11px] bg-slate-950 px-3 py-1 rounded border border-slate-800 text-slate-400 overflow-x-auto">
                      {item.classes}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'mockup' && (
          <div className="space-y-6">
            <div className="bg-sky-950/40 border border-sky-800/50 rounded-xl p-4 flex items-center justify-between text-xs text-sky-200">
              <span>
                💡 <strong>Verification Mockup:</strong> Below page is reconstructed using ONLY our <code>&lt;Text variant=&quot;...&quot; /&gt;</code> components.
              </span>
              <span className="font-mono bg-sky-900 px-2 py-0.5 rounded text-sky-300">
                Mahir Invest Careers Page
              </span>
            </div>

            {/* Recreated Mahir Invest Careers UI Page using Text Component */}
            <div className="rounded-3xl overflow-hidden border border-slate-800 bg-gradient-to-b from-sky-500 via-sky-400 to-sky-200 text-slate-900 shadow-2xl">
              {/* Header Navbar */}
              <nav className="px-6 py-5 flex items-center justify-between max-w-6xl mx-auto border-b border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-sky-600 text-xs shadow-md">
                    ❇️
                  </div>
                  <Text variant="card-title" as="span" className="text-white text-lg font-bold tracking-wider">
                    MAHIR <span className="font-light text-xs opacity-90 block sm:inline">INVEST</span>
                  </Text>
                </div>

                <div className="hidden md:flex items-center gap-6">
                  {['Services', 'About', 'Careers', 'Tools', 'Blogs', 'Pricing'].map((link) => (
                    <Text key={link} variant="nav-link" as="a" className="text-white/90 hover:text-white cursor-pointer transition">
                      {link}
                    </Text>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Button variant="outline" className="rounded-full">
                    Talk to us
                  </Button>
                  <Button className="bg-white text-sky-700 font-semibold rounded-full hover:bg-white/90">
                    Sign up
                  </Button>
                </div>
              </nav>

              {/* Hero Section */}
              <section className="px-6 pt-16 pb-16 text-center max-w-4xl mx-auto space-y-4">
                <Text variant="eyebrow" className="text-white/80 tracking-widest">
                  JOIN OUR MISSION
                </Text>

                <Text variant="hero-title" className="text-white drop-shadow-sm">
                  Careers
                </Text>

                <Text variant="subtitle" className="text-white/90 max-w-2xl mx-auto">
                  Learn about life at MAHIR and the values that shape how we work.
                </Text>
              </section>

              {/* Not Hiring Card Container */}
              <section className="px-6 max-w-3xl mx-auto mb-16">
                <div className="bg-white/40 backdrop-blur-md rounded-2xl p-8 text-center border border-white/60 shadow-lg space-y-3">
                  <div className="w-10 h-10 mx-auto rounded-full bg-sky-100/80 flex items-center justify-center text-slate-700 text-lg">
                    🕒
                  </div>
                  <Text variant="card-title" className="text-slate-800">
                    We&apos;re not hiring right now
                  </Text>
                  <Text variant="body-md" className="text-slate-600 max-w-xl mx-auto">
                    There are no open positions at the moment. We&apos;ll share new opportunities here when they become available — thank you for your interest in MAHIR.
                  </Text>
                </div>
              </section>

              {/* Perks & Benefits Section */}
              <section className="px-6 py-12 max-w-6xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                  <Text variant="eyebrow" className="text-slate-700">
                    Join us
                  </Text>
                  <Text variant="section-title" className="text-slate-900">
                    Our Perks And Benefits
                  </Text>
                  <Text variant="subtitle" className="text-slate-700 max-w-2xl mx-auto">
                    We believe great work happens when people feel supported, trusted, and valued.
                  </Text>
                </div>

                {/* 6 Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  {PERKS_DATA.map((perk) => (
                    <div
                      key={perk.title}
                      className="bg-white/50 backdrop-blur-sm border border-white/70 rounded-2xl p-6 space-y-3 shadow-md hover:shadow-xl transition"
                    >
                      <div className="w-9 h-9 rounded-full bg-sky-100/70 flex items-center justify-center text-base">
                        {perk.icon}
                      </div>
                      <Text variant="feature-title" className="text-slate-900">
                        {perk.title}
                      </Text>
                      <Text variant="body-md" className="text-slate-600">
                        {perk.desc}
                      </Text>
                    </div>
                  ))}
                </div>

                {/* Email Callout */}
                <div className="text-center pt-8">
                  <Text variant="body-sm" className="text-slate-700">
                    Don&apos;t see your role? Email us at{' '}
                    <a href="mailto:contact@mahir.in" className="font-semibold text-slate-900 underline">
                      contact@mahir.in
                    </a>
                  </Text>
                </div>
              </section>

              {/* Footer Section */}
              <footer className="bg-white text-slate-700 px-6 py-12 border-t border-slate-200 space-y-6">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-sky-50 flex items-center justify-center font-bold text-sky-600 text-lg border border-sky-200">
                    ❇️
                  </div>

                  <Text variant="body-sm" className="text-slate-500 font-medium">
                    SEBI Registered Investment Adviser - INA000022668
                  </Text>

                  <div className="flex flex-wrap justify-center gap-3 text-xs text-slate-500 font-medium">
                    {['Plans', 'Calculators', 'Blogs', 'About', 'Careers', 'Team', 'Terms', 'Privacy', 'Cancellation', 'Refund', 'Disclaimer', 'SEBI Disclosures', 'Investor Charter'].map((item) => (
                      <span key={item} className="hover:text-slate-800 cursor-pointer">
                        {item} ·
                      </span>
                    ))}
                  </div>

                  <div className="space-y-1 pt-2">
                    <Text variant="legal" className="text-slate-500">
                      MAHIR Investment Advisers Private Limited
                    </Text>
                    <Text variant="legal" className="text-slate-500">
                      CIN: U60160PN2025PTC244016 · GSTIN: 27AATOM0080H1ZU · SEBI Reg No: INA000022668 · BASD: 2026
                    </Text>
                    <Text variant="legal" className="text-slate-500">
                      Principal Officer: Yash Mahavir Bedmutha · admin@mahiradvisers.com · PL G/A-9/1, MIDC, Chinchwad East, Pune 411019
                    </Text>
                  </div>

                  <Text variant="legal" className="text-slate-400 pt-4 border-t border-slate-100">
                    © 2026 MAHIR Investment Advisers Pvt. Ltd. All rights reserved. Investment in securities market are subject to market risks. Read all related documents carefully before investing.
                  </Text>
                </div>
              </footer>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
