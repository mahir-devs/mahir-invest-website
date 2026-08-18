'use client';

import React, { useState, useMemo } from 'react';
import CloudAnimation from '@/components/animations/ClaudeAnimation';
import { Footer } from '@/components/common/footer';
import { BlogCard } from '@/components/common/cards';
import { SectionDivider } from '@/components/common/section-divider';
import { MotionContainer, MotionItem } from '@/components/animations';
import { BLOG_POSTS, BlogPost, getCategories } from '@/lib/blogs';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';

export { BLOG_POSTS };
export type { BlogPost };

const ITEMS_PER_PAGE = 12;

export const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);

  const categories = useMemo(() => getCategories(), []);

  const filteredBlogs = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedBlogs = useMemo(() => {
    return filteredBlogs.slice(0, visibleCount);
  }, [filteredBlogs, visibleCount]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden select-none">
      {/* Top Hero Blue Gradient Header Section with Cloud Animation */}
      <section className="relative w-full bg-gradient-to-b from-[var(--blue-normal)] via-[var(--blue-normal)] via-40% to-[var(--blue-light)] text-white pt-34 sm:pt-38 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
        {/* <CloudAnimation height={50} opacity={1} speed={26} /> */}

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-white/10 blur-[130px] rounded-full pointer-events-none" />

        <MotionContainer
          staggerDelay={0.12}
          delay={0.1}
          className="relative max-w-6xl mx-auto text-center z-10 space-y-8 sm:space-y-12"
        >
          {/* Header Title */}
          <div className="space-y-3 mb-20 max-w-3xl mx-auto">
            <MotionItem direction="down" duration={0.5}>
              <span className="inline-flex items-center text-white/60 gap-1.5 px-3 py-1 rounded-full text-xs font-normal uppercase tracking-widest ">
                RESOURCES
              </span>
            </MotionItem>

            <MotionItem direction="scaleDown" scale={1.15} duration={0.6}>
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-normal text-white tracking-tight leading-tight drop-shadow-sm">
                Blogs &amp; Insights
              </h1>
            </MotionItem>

            <MotionItem direction="up" distance={15} duration={0.5}>
              <p className="text-xs sm:text-base lg:text-[16px] text-white/60 font-normal leading-relaxed max-w-2xl mx-auto">
                Educational insights and research-backed advisory content.
              </p>
            </MotionItem>
          </div>
        </MotionContainer>

        {/* Blog grid — standalone motion so Load More items animate correctly */}
        <div className="relative max-w-6xl mx-auto z-10 space-y-8 sm:space-y-12">
          {displayedBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto text-left pt-2">
              {displayedBlogs.map((blog, index) => (
                <MotionItem
                  key={blog.id}
                  direction="up"
                  distance={30}
                  duration={0.55}
                  standalone
                  viewportOnce
                >
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
                    href={`/blogs/${blog.slug}`}
                  />
                </MotionItem>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center space-y-3 bg-white/5 rounded-3xl border border-white/10 max-w-2xl mx-auto">
              <p className="text-lg font-semibold text-white">No blogs found matching your search.</p>
              <p className="text-sm text-white/70">Try searching for a different keyword or select another category.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-2 px-5 py-2 rounded-xl bg-white text-slate-900 text-xs font-bold hover:bg-slate-100 transition-all cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

          {visibleCount < filteredBlogs.length && (
            <div className="pt-6 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm shadow-xl transition-all hover:scale-105 cursor-pointer"
              >
                Load More

              </button>
            </div>
          )}
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

export default BlogsPage;
