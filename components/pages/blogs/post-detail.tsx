'use client';

import React from 'react';
import Image from 'next/image';
import CloudAnimation from '@/components/animations/ClaudeAnimation';
import { Footer } from '@/components/common/footer';
import { GlassCard } from '@/components/common/cards';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';
import { ArrowLeft, BookOpen, Clock, Calendar, User } from 'lucide-react';
import { getBlogById, BLOG_POSTS } from '@/lib/blogs';
import { BLOG_DEFAULT_IMAGE } from '@/lib/assets';
import { BlogMarkdownRenderer } from '@/components/common/blog-markdown-renderer';

export interface BlogPostDetailPageProps {
  id?: string;
  backLinkHref?: string;
  backLinkLabel?: string;
}

export const BlogPostDetailPage: React.FC<BlogPostDetailPageProps> = ({
  id,
  backLinkHref = '/blogs',
  backLinkLabel = 'Back to Blogs & Guides',
}) => {
  const post = getBlogById(id || '1') || BLOG_POSTS[0];
  const heroImage = post.imageSrc || BLOG_DEFAULT_IMAGE;

  return (
    <div className="relative w-full min-h-screen overflow-hidden select-none">
      {/* Top Hero Blue Gradient Header with Cloud Animation */}
      <section className="relative w-full bg-gradient-to-b from-[var(--blue-normal)] via-[var(--blue-normal)] via-40% to-[var(--blue-light)] text-white pt-34 sm:pt-38 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
        {/* <CloudAnimation height={70} opacity={1} speed={26} /> */}

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-white/10 blur-[130px] rounded-full pointer-events-none" />

        <MotionContainer
          staggerDelay={0.15}
          delay={0.1}
          className="relative max-w-4xl mx-auto text-center z-10 space-y-8 sm:space-y-12"
        >
          {/* Back Navigation Button */}
          {/* <MotionItem direction="down" duration={0.4}>
            <div className="flex justify-center">
              <a
                href={backLinkHref}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white text-xs sm:text-sm font-medium transition-all shadow-md"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{backLinkLabel}</span>
              </a>
            </div>
          </MotionItem> */}

          {/* Article Category Pill & Metadata */}
          <MotionItem direction="up" distance={15} duration={0.5} className="space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/15 border border-white/20 text-sky-200 backdrop-blur-md">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-normal text-white tracking-tight leading-snug max-w-3xl mx-auto drop-shadow-sm">
              {post.title}
            </h1>

            {/* Author / Date / Reading Time metadata bar */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-white/80 font-medium pt-2">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-sky-300" />
                {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-sky-300" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-sky-300" />
                {post.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-sky-300" />
                {post.wordCount} words
              </span>
            </div>
          </MotionItem>

          {/* Main Article Glass Card Container */}
          <MotionItem direction="up" distance={30} duration={0.65} className="w-full">
            <GlassCard
              variant="dark"
              rounded="3xl"
              padding="none"
              className="bg-white border border-white/90 shadow-2xl p-6 sm:p-12 lg:p-14 rounded-[32px] sm:rounded-[40px] text-left space-y-8"
            >
              {/* Data-driven dynamic image banner card or static photo image */}
              <div className="relative w-full rounded-[24px] overflow-hidden shadow-lg border border-slate-200/50">
                <div className="relative w-full h-64 sm:h-[360px] lg:h-[400px]">
                  <Image
                    src={heroImage}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 900px"
                  />
                </div>
              </div>

              {/* Dynamic Markdown Article Content */}
              <div className="pt-2">
                <BlogMarkdownRenderer content={post.content} />
              </div>


            </GlassCard>
          </MotionItem>
        </MotionContainer>
      </section>

      {/* Footer Section */}
      <div className="relative z-10 w-full">
        <SectionDivider />
        <Footer />
      </div>
    </div>
  );
};

export default BlogPostDetailPage;
