'use client';

import React from 'react';
import Image from 'next/image';
import CloudAnimation from '@/components/animations/ClaudeAnimation';
import { Footer } from '@/components/common/footer';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Yash Mahavir Bedmuttha',
    designation: 'Principal Officer & Director',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    linkedin: '#',
  },
  {
    id: 2,
    name: 'Bharat Makkar',
    designation: 'Compliance Officer & DPO',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
    linkedin: '#',
  },
  {
    id: 3,
    name: 'Sarah Chen',
    designation: 'Product Lead',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    linkedin: '#',
  },
  {
    id: 4,
    name: 'Marcus Thompson',
    designation: 'Head of Quantitative Research',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    linkedin: '#',
  },
  {
    id: 5,
    name: 'Elena Rodriguez',
    designation: 'Head of Growth',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    linkedin: '#',
  },
  {
    id: 6,
    name: 'James Wilson',
    designation: 'Operations Manager',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    linkedin: '#',
  },
];

export const AboutPage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden select-none">
      {/* Top Sky Blue Gradient Background Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-[var(--blue-normal)] via-[var(--blue-normal)] via-40% to-[var(--blue-light)] text-white pt-24 sm:pt-32 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
        <CloudAnimation height={90} opacity={1} speed={26} />

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-white/10 blur-[130px] rounded-full pointer-events-none" />

        <MotionContainer staggerDelay={0.15} delay={0.1} className="relative max-w-5xl mx-auto z-10 space-y-8 text-center">
          <MotionItem direction="scaleDown" scale={1.1} duration={0.6}>
            <h1 className="text-4xl sm:text-6xl font-normal text-white tracking-tight leading-tight drop-shadow-sm">
              Who Are We
            </h1>
          </MotionItem>

          <MotionItem direction="up" distance={15} duration={0.5}>
            <p className="text-base sm:text-xl text-white/90 font-normal leading-relaxed max-w-3xl mx-auto">
              We help you make better financial decisions with clear guidance, simple insights, and a focus on long-term investing.
            </p>
          </MotionItem>

          {/* Banner Hero Image */}
          <MotionItem direction="up" distance={30} duration={0.65} className="w-full pt-4">
            <div className="max-w-5xl mx-auto rounded-3xl sm:rounded-[36px] overflow-hidden border border-white/20 shadow-2xl bg-white/10 p-2 sm:p-4 backdrop-blur-md">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="Mahir Advisers Team Collaboration"
                className="w-full h-[260px] sm:h-[450px] object-cover rounded-2xl sm:rounded-[28px]"
              />
            </div>
          </MotionItem>
        </MotionContainer>
      </section>

      {/* Main Content Section */}
      <section className="relative z-10 w-full bg-white text-slate-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* --- FOUNDER SECTION --- */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight text-center md:text-left">
              Meet Our Leadership
            </h2>

            <div className="bg-slate-50 border border-slate-200/80 shadow-xs rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
              {/* Founder Image */}
              <div className="w-full md:w-2/5 shrink-0 h-[300px] sm:h-[380px] rounded-2xl overflow-hidden relative shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=800&auto=format&fit=crop"
                  alt="Founder Leadership"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Founder Text Content */}
              <div className="w-full md:w-3/5 space-y-6 text-slate-700">
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-normal text-slate-900">
                    Message from Leadership
                  </h3>
                  <p className="text-sm sm:text-base text-slate-500 font-normal">
                    Mahir Investment Advisers Private Limited
                  </p>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-slate-700 italic font-normal">
                  &ldquo;We are a finance-focused platform committed to empowering investors with trusted insights, educational support, and a long-term approach to wealth creation. Our goal is simple: to help you invest smarter, not riskier. Every recommendation we publish is backed by rigorous SEBI-compliant fundamental research.&rdquo;
                </p>

                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-base font-normal text-slate-900">Yash Mahavir Bedmuttha</p>
                    <p className="text-xs text-slate-500 font-normal">Principal Officer &amp; Director</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="mailto:admin@mahiradvisers.com"
                      className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-sky-600 hover:border-sky-300 transition-colors shadow-xs"
                      aria-label="Email Leadership"
                    >
                      ✉️
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-xs"
                      aria-label="LinkedIn Profile"
                    >
                      💼
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- TEAM SECTION --- */}
          <div className="space-y-10 pt-6">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">
                Meet Our Talented Team
              </h2>
              <p className="text-base text-slate-600 font-normal">
                Dedicated research analysts, technology innovators, and compliance experts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-slate-50/90 border border-slate-200/80 shadow-xs rounded-3xl p-5 flex flex-col transition-all hover:-translate-y-1 hover:shadow-md hover:bg-sky-50/40"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-2xl mb-4"
                  />
                  <div className="flex justify-between items-end flex-grow">
                    <div>
                      <h3 className="text-lg font-normal text-slate-900">
                        {member.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-normal mt-0.5">
                        {member.designation}
                      </p>
                    </div>
                    <a
                      href={member.linkedin}
                      className="text-slate-400 hover:text-sky-600 transition-colors p-1"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      🔗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
