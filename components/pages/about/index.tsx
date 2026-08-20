'use client';

import React from 'react';
import Link from 'next/link';
import CloudAnimation from '@/components/animations/ClaudeAnimation';
import { Footer } from '@/components/common/footer';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';
import { GlassCard } from '@/components/ui/glass-card';
import {
  ShieldCheck,
  CheckCircle2,
  Quote,
  ArrowRight,
  Mail,
  Target,
  Sparkles,
  Lightbulb,
  Compass,
  Building2,
  Calendar,
  Layers,
  Search,
} from 'lucide-react';

const storySteps = [
  {
    step: 'Step 01',
    title: 'MAHIR Invest Founded',
    date: 'Oct 2025',
    description:
      'MAHIR Invest started in October 2025 with one belief: investment advice should be clear, easy to explain, and truly in the client’s interest.',
  },
  {
    step: 'Step 02',
    title: 'SEBI Registered Advisory',
    date: 'Oct 2025',
    description:
      'MAHIR Invest became a SEBI Registered Investment Adviser (INA000022668), giving our long-term approach the compliance and transparency clients deserve.',
  },
  {
    step: 'Step 03',
    title: 'MAHIR Invest Opened',
    date: 'May 15, 2026',
    description:
      'On 15 May 2026, MAHIR Invest opened for clients, turning our research into clear, personal investment advice.',
  },
  {
    step: 'Step 04',
    title: 'Expanded Advisory Framework',
    date: '2026 & Beyond',
    description:
      'Continually refining our research logic, risk frameworks, and portfolio strategies to serve long-term investors.',
  },
];

const differentiators = [
  {
    icon: ShieldCheck,
    title: 'SEBI Registered',
    description:
      'Fully compliant with SEBI regulations (INA000022668). Your investments are protected by strict governance.',
  },
  {
    icon: Search,
    title: 'Research-Backed',
    description:
      'Every recommendation is backed by thorough, documented fundamental research.',
  },
  {
    icon: Target,
    title: 'Client-First',
    description:
      'Flat-fee model with zero commissions. We succeed only when you succeed.',
  },
  {
    icon: Compass,
    title: 'Built to Last',
    description:
      'MAHIR Invest is for investors who take the long term seriously and expect the same from their partner.',
  },
];

export const AboutPage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden select-none bg-gradient-to-b from-[var(--blue-normal)] via-[var(--blue-light)] via-50% to-white">
      {/* Top Hero Section */}
      <section className="relative w-full text-white pt-34 sm:pt-38 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-white/10 blur-[130px] rounded-full pointer-events-none" />

        <MotionContainer staggerDelay={0.15} delay={0.1} className="relative max-w-4xl mx-auto z-10 space-y-6 text-center">
          <MotionItem direction="scaleDown" scale={1.1} duration={0.6}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-xs sm:text-sm font-medium tracking-wide text-white backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-sky-200" />
              Built for You With Clarity
            </span>
          </MotionItem>

          <MotionItem direction="up" distance={15} duration={0.5}>
            <h1 className="text-4xl sm:text-6xl font-normal text-white tracking-tight leading-tight drop-shadow-sm">
              Who Are We
            </h1>
          </MotionItem>

          <MotionItem direction="up" distance={20} duration={0.6}>
            <p className="text-base sm:text-xl text-white/90 font-normal leading-relaxed max-w-3xl mx-auto">
              <strong className="font-semibold text-white">MAHIR Invest</strong> is a SEBI-registered Investment Adviser built to help investors think clearly, decide confidently, and build wealth sustainably through research-backed stock recommendations and disciplined risk management.
            </p>
          </MotionItem>
        </MotionContainer>
      </section>

      {/* Main Content Section */}
      <section className="relative z-10 w-full text-slate-900 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 space-y-20">

        <div className="relative max-w-5xl mx-auto z-10 space-y-24">

          {/* --- HOW WE STARTED / CLARITY OVER NOISE --- */}
          <GlassCard
            variant="light"
            blur="2xl"
            rounded="3xl"
            padding="lg"
            className="bg-white/70 backdrop-blur-2xl border border-[var(--blue-normal)]/30 shadow-xl shadow-sky-900/5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50/80 border border-sky-200/60 text-sky-700 text-xs font-semibold">
              <Lightbulb className="w-3.5 h-3.5" />
              How We Started
            </div>

            <h2 className="text-3xl sm:text-4xl font-normal text-[var(--blue-darker)] tracking-tight">
              Clarity Over Noise.
            </h2>

            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-700 font-normal">
              <p>
                MAHIR Invest is built to help you invest with more clarity and less noise. Every research note, portfolio update, and recommendation is designed to make your investment decisions better, simpler, and more confident.
              </p>
              <p>
                We do not chase trends or push commission-driven products. Our advisory starts with one question: <strong className="font-semibold text-slate-900">will this help the client build wealth over time?</strong> That question drives our stock research, risk framework, portfolio reviews, and the way we communicate every investment idea.
              </p>
              <p>
                What you read in our reports is backed by documented research. The strict risk checks, compliance reviews, and our refusal to recommend anything we would not own ourselves are what make the advice worth following. MAHIR Invest is for investors who take the long term seriously and expect the same from their partner.
              </p>
            </div>
          </GlassCard>

          {/* --- OUR STORY / TIMELINE --- */}
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50/80 border border-sky-200/60 text-sky-700 text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-normal text-[var(--blue-darker)] tracking-tight">
                Key Moments
              </h2>
              <p className="text-base text-slate-600 font-normal">
                From a single idea in October 2025 to a SEBI-registered advisory built with the same care.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {storySteps.map((item, idx) => (
                <GlassCard
                  key={idx}
                  variant="light"
                  blur="xl"
                  rounded="3xl"
                  padding="md"
                  className="bg-white/70 backdrop-blur-xl border border-[var(--blue-normal)]/30 shadow-md shadow-sky-900/5 flex flex-col justify-between space-y-4 hover:border-sky-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-100/80 text-sky-800 border border-sky-200/50">
                        {item.step}
                      </span>
                      <span className="text-xs font-normal text-slate-500">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-normal text-[var(--blue-darker)]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* --- LEADERSHIP / DIRECTOR SECTION --- */}
          <GlassCard
            variant="light"
            blur="3xl"
            rounded="3xl"
            padding="lg"
            className="bg-white/80 backdrop-blur-3xl border border-[var(--blue-normal)]/40 shadow-2xl shadow-sky-900/10 space-y-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/10 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10 space-y-3 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
                Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[var(--blue-darker)]">
                A Steady Hand Behind Every Recommendation.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Yash leads MAHIR Invest with a focus on building advisory systems that serve clients first. His experience across research, advisory, and governance shapes the discipline and transparency behind every MAHIR Invest recommendation.
              </p>
            </div>

            {/* Inner Luminous Quote Box */}
            <div className="relative z-10 bg-white/70 backdrop-blur-xl border border-[var(--blue-normal)]/30 rounded-2xl p-6 sm:p-8 space-y-4 shadow-md shadow-sky-900/5">
              <Quote className="w-8 h-8 text-sky-500 opacity-90" />
              <blockquote className="text-lg sm:text-xl text-slate-800 font-normal leading-relaxed italic">
                &ldquo;We would rather explain a modest recommendation than defend a loud one. That&apos;s the only way this compounds.&rdquo;
              </blockquote>
              <div className="pt-3 border-t border-slate-200/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <p className="text-base font-semibold text-[var(--blue-darker)]">Yash Bedmuttha</p>
                  <p className="text-xs text-sky-600 font-medium">Director &amp; Principal Officer, MAHIR Invest</p>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* --- WHO IS MAHIR INVEST, WHY WE STARTED & OUR MISSION --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard
              variant="light"
              blur="xl"
              rounded="3xl"
              padding="md"
              className="bg-white/70 backdrop-blur-xl border border-[var(--blue-normal)]/30 shadow-md shadow-sky-900/5 space-y-4 hover:border-sky-400 hover:shadow-xl transition-all"
            >
              <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-normal text-[var(--blue-darker)]">Who is MAHIR Invest</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                MAHIR Invest is a SEBI-registered Investment Adviser (INA000022668) providing personalized investment recommendations grounded in deep fundamental research — no commissions, no conflicts, just honest, research-backed advice built for the Indian investor.
              </p>
            </GlassCard>

            <GlassCard
              variant="light"
              blur="xl"
              rounded="3xl"
              padding="md"
              className="bg-white/70 backdrop-blur-xl border border-[var(--blue-normal)]/30 shadow-md shadow-sky-900/5 space-y-4 hover:border-sky-400 hover:shadow-xl transition-all"
            >
              <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-normal text-[var(--blue-darker)]">Why We Started</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                The financial services industry was built to sell — not to advise. Retail investors were drowning in noise, pushed toward commission-heavy products that served distributors better than investors. We started MAHIR Invest to build an advisory service where every recommendation is backed by documented research, clear risk controls, and zero hidden incentives.
              </p>
            </GlassCard>

            <GlassCard
              variant="light"
              blur="xl"
              rounded="3xl"
              padding="md"
              className="bg-white/70 backdrop-blur-xl border border-[var(--blue-normal)]/30 shadow-md shadow-sky-900/5 space-y-4 hover:border-sky-400 hover:shadow-xl transition-all"
            >
              <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-normal text-[var(--blue-darker)]">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To bring high-quality, research-backed investment advice to every Indian investor. Quality advice should not be a luxury reserved for the ultra-wealthy. We believe that with clear entry-target-stop guidance and disciplined risk management, financial freedom is achievable for everyone.
              </p>
            </GlassCard>
          </div>

          {/* --- RESEARCH-BACKED INVESTMENT ADVISORY --- */}
          <div className="space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50/80 border border-sky-200/60 text-sky-700 text-xs font-semibold">
                <Layers className="w-3.5 h-3.5" />
                Advisory Insights
              </div>
              <h2 className="text-3xl sm:text-4xl font-normal text-[var(--blue-darker)] tracking-tight">
                Research-Backed Investment Advisory
              </h2>
              <p className="text-base text-slate-600 font-normal">
                Every recommendation, model portfolio, and research report follows the same standard — is this clear, backed by fundamental research, and truly right for the client?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Stock Advisory Card */}
              <GlassCard
                variant="light"
                blur="2xl"
                rounded="3xl"
                padding="lg"
                className="bg-white/80 backdrop-blur-2xl border border-sky-300/70 shadow-lg shadow-sky-900/5 space-y-6 flex flex-col justify-between hover:shadow-2xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200/60">
                      SEBI-Registered Investment Adviser
                    </span>
                    <span className="text-xs text-slate-500 font-mono">INA000022668</span>
                  </div>

                  <h3 className="text-2xl font-normal text-[var(--blue-darker)]">Personalized Stock Advisory</h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    A strictly SEBI-registered advisory offering personalized stock recommendations. Every idea is backed by deep fundamental research, documented reasoning, and clear entry-target-stop levels so you always know why, when, and how to invest.
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    <li className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Clear entry, target, and stop-loss levels</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Deep fundamental research &amp; thesis reports</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Ongoing portfolio tracking &amp; exit alerts</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-200/70">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[var(--blue-normal)] text-white text-sm font-medium hover:bg-[var(--blue-normal-hover)] transition-colors shadow-sm"
                  >
                    Explore Advisory Plans
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </GlassCard>

              {/* Fiduciary Model Card */}
              <GlassCard
                variant="light"
                blur="2xl"
                rounded="3xl"
                padding="lg"
                className="bg-white/80 backdrop-blur-2xl border border-slate-200/80 shadow-lg shadow-slate-900/5 space-y-6 flex flex-col justify-between hover:shadow-2xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                      Zero Commission Fiduciary
                    </span>
                    <span className="text-xs text-slate-500 font-mono">100% Unbiased</span>
                  </div>

                  <h3 className="text-2xl font-normal text-[var(--blue-darker)]">Flat-Fee Fiduciary Model</h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    We operate on a transparent flat-fee model with zero commissions from brokers or third-party product sellers. Our sole commitment is to protect and grow your capital without any conflicts of interest.
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    <li className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                      <span>Flat-fee pricing with zero hidden costs</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                      <span>Fully compliant with SEBI regulations</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                      <span>100% client-aligned stock recommendations</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-200/70">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
                  >
                    View Pricing Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* --- WHAT MAKES US DIFFERENT --- */}
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-3xl sm:text-4xl font-normal text-[var(--blue-darker)] tracking-tight">
                What Makes Us Different
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <GlassCard
                    key={idx}
                    variant="light"
                    blur="xl"
                    rounded="3xl"
                    padding="md"
                    className="bg-white/70 backdrop-blur-xl border border-[var(--blue-normal)]/30 shadow-md shadow-sky-900/5 space-y-3 hover:border-sky-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-normal text-[var(--blue-darker)]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </GlassCard>
                );
              })}
            </div>
          </div>

          {/* --- TALK TO THE TEAM / CTA SECTION --- */}
          <GlassCard
            variant="light"
            blur="3xl"
            rounded="3xl"
            padding="lg"
            className="bg-gradient-to-r from-[var(--blue-normal)] via-sky-600 to-[var(--blue-dark)] text-white text-center space-y-6 shadow-2xl shadow-sky-900/20 relative overflow-hidden border border-white/20"
          >
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-white">
                Talk To The Team
              </h2>
              <p className="text-base sm:text-lg text-sky-50 leading-relaxed">
                Have questions about our SEBI-registered advisory, research methodology, or subscription plans? We are here to help you navigate your investment journey with total clarity.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="mailto:admin@mahirinvest.com"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white text-sky-700 font-semibold text-sm hover:bg-sky-50 transition-colors shadow-md w-full sm:w-auto"
                >
                  <Mail className="w-4 h-4" />
                  Email Us: admin@mahirinvest.com
                </a>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white/20 border border-white/30 text-white font-semibold text-sm hover:bg-white/30 backdrop-blur-md transition-colors shadow-md w-full sm:w-auto"
                >
                  View Advisory Plans
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </GlassCard>

        </div>
      </section>

      {/* Footer Section */}
      <div className="relative z-10 w-full">
        <SectionDivider />
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
