'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CloudAnimation from '@/components/animations/ClaudeAnimation';
import { Footer } from '@/components/common/footer';
import { GlassCard, BlogCard, BlogDynamicImage } from '@/components/common/cards';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';
import { BLOG_POSTS } from '@/lib/blogs';

export const NewsPage = () => {
  const featuredPost = BLOG_POSTS[0];
  const relatedPosts = BLOG_POSTS.slice(1, 10);

  const hasFeaturedImage =
    featuredPost.imageSrc &&
    !featuredPost.imageSrc.includes('placeholder') &&
    (featuredPost.imageSrc.startsWith('http') || featuredPost.imageSrc.startsWith('/images/'));

  return (
    <div className="relative w-full min-h-screen overflow-hidden select-none">
      {/* Top Hero Blue Gradient Header Section with Cloud Animation */}
      <section className="relative w-full bg-gradient-to-b from-[var(--blue-normal)] via-[var(--blue-normal)] via-40% to-[var(--blue-light)] text-white pt-34 sm:pt-38 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
        <CloudAnimation height={70} opacity={1} speed={26} />

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-white/10 blur-[130px] rounded-full pointer-events-none" />

        <MotionContainer staggerDelay={0.15} delay={0.1} className="relative max-w-6xl mx-auto text-center z-10 space-y-12 sm:space-y-16">
          {/* Header Title */}
          <div className="space-y-2 sm:space-y-3 max-w-3xl mx-auto">
            <MotionItem direction="down" duration={0.5}>
              <p className="text-xs sm:text-[14px] uppercase text-sky-200 font-medium tracking-widest">
                RESOURCES
              </p>
            </MotionItem>

            <MotionItem direction="scaleDown" scale={1.15} duration={0.6}>
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-normal text-white tracking-tight leading-tight drop-shadow-sm">
                News &amp; Articles
              </h1>
            </MotionItem>

            <MotionItem direction="up" distance={15} duration={0.5}>
              <p className="text-xs sm:text-base lg:text-[17px] text-white/90 font-normal leading-relaxed max-w-2xl mx-auto">
                Read the latest market news, company updates, expert insights, and economic developments to make more informed investment decisions.
              </p>
            </MotionItem>
          </div>

          {/* Featured Horizontal Card (Hero Article Box) */}
          <MotionItem direction="up" distance={30} duration={0.65} className="w-full max-w-5xl mx-auto">
            <Link href={`/blogs/${featuredPost.slug || featuredPost.id}`} className="block group">
              <GlassCard
                variant="frosted"
                rounded="3xl"
                padding="none"
                className="bg-white/85 backdrop-blur-xl border border-white/90 shadow-2xl p-6 sm:p-8 rounded-[32px] sm:rounded-[36px] overflow-hidden text-left transition-transform duration-300 group-hover:scale-[1.01]"
              >
                <div className="flex flex-col md:flex-row items-stretch gap-6 sm:gap-8">
                  {/* Left Image Thumbnail / Graphic Card */}
                  <div className="relative w-full md:w-5/12 h-56 sm:h-64 md:h-auto min-h-[220px] rounded-[24px] overflow-hidden shrink-0">
                    {hasFeaturedImage ? (
                      <Image
                        src={featuredPost.imageSrc!}
                        alt={featuredPost.title}
                        fill
                        priority
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 450px"
                      />
                    ) : (
                      <BlogDynamicImage
                        category={featuredPost.category}
                        title={featuredPost.title}
                        readTime={featuredPost.readTime}
                        wordCount={featuredPost.wordCount}
                        size="md"
                      />
                    )}
                  </div>

                  {/* Right Details */}
                  <div className="flex-1 flex flex-col justify-between space-y-4 py-1">
                    <div className="space-y-3">
                      <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-slate-100 border border-slate-200/80 text-slate-800">
                        {featuredPost.category || 'Market'}
                      </span>

                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug tracking-tight group-hover:text-sky-600 transition-colors">
                        {featuredPost.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 text-xs sm:text-sm">
                      <span className="font-bold text-slate-900">{featuredPost.author}</span>
                      <div className="flex items-center gap-2 text-slate-500 font-medium">
                        <span>{featuredPost.date}</span>
                        <span>•</span>
                        <span className="text-sky-600">{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Link>
          </MotionItem>

          {/* Related News and Articles Section */}
          <div className="pt-8 sm:pt-14 space-y-10 sm:space-y-12">
            {/* Section Heading */}
            <div className="space-y-2 max-w-2xl mx-auto text-center">
              <MotionItem direction="up" distance={20} duration={0.5}>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-white tracking-tight leading-tight">
                  Related News and Articles
                </h2>
              </MotionItem>

              <MotionItem direction="up" distance={15} duration={0.5}>
                <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed max-w-xl mx-auto">
                  Read the latest market news, company updates, expert insights, and economic developments to make more informed investment decisions.
                </p>
              </MotionItem>
            </div>

            {/* 3-Column Related Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto text-left">
              {relatedPosts.map((blog, index) => (
                <MotionItem key={blog.id} direction="up" distance={30} duration={0.55}>
                  <BlogCard
                    id={blog.id}
                    category={blog.category}
                    imageSrc={blog.imageSrc}
                    cardTitle={blog.title}
                    excerpt={blog.excerpt}
                    author={blog.author}
                    date={blog.date}
                    readTime={blog.readTime}
                    wordCount={blog.wordCount}
                    priority={index < 3}
                    href={`/blogs/${blog.slug || blog.id}`}
                  />
                </MotionItem>
              ))}
            </div>
          </div>
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

export default NewsPage;
