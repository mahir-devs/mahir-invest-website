import rawBlogsData from './data/blogs.json';
import { BLOG_DEFAULT_IMAGE } from './assets';

export interface RawBlogPost {
  id: number;
  category: string;
  title: string;
  slug: string;
  content: string;
  wordCount: number;
}

export interface BlogPost {
  id: string;
  numericId: number;
  category: string;
  title: string;
  cardTitle: string;
  slug: string;
  content: string;
  excerpt: string;
  wordCount: number;
  readTime: string;
  author: string;
  date: string;
  imageSrc?: string;
}

function cleanMarkdownExcerpt(content: string, maxLength: number = 160): string {
  if (!content) return '';
  const plainText = content
    .replace(/^#+\s+/gm, '') // Remove Markdown headers
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links
    .replace(/[*_~`]/g, '') // Remove formatting characters
    .replace(/>\s+/g, '') // Remove blockquotes
    .replace(/-\s+/g, '') // Remove bullet points
    .replace(/\s+/g, ' ') // Normalize spaces
    .trim();

  if (plainText.length <= maxLength) return plainText;
  return plainText.substring(0, maxLength).trim() + '...';
}

const mockDates = [
  'Aug 14, 2026',
  'Aug 10, 2026',
  'Aug 05, 2026',
  'Jul 28, 2026',
  'Jul 22, 2026',
  'Jul 15, 2026',
  'Jul 08, 2026',
  'Jun 30, 2026',
  'Jun 21, 2026',
  'Jun 14, 2026',
];

export const BLOG_POSTS: BlogPost[] = (rawBlogsData as RawBlogPost[]).map((raw, index) => {
  const readTimeMinutes = Math.max(1, Math.ceil(raw.wordCount / 200));
  return {
    id: String(raw.id),
    numericId: raw.id,
    category: raw.category,
    title: raw.title,
    cardTitle: raw.title,
    slug: raw.slug,
    content: raw.content,
    excerpt: cleanMarkdownExcerpt(raw.content),
    wordCount: raw.wordCount,
    readTime: `${readTimeMinutes} min read`,
    author: 'MAHIR Research',
    date: mockDates[index % mockDates.length],
    imageSrc: BLOG_DEFAULT_IMAGE,
  };
});

export function getAllBlogs(): BlogPost[] {
  return BLOG_POSTS;
}

export function getBlogById(id: string | number): BlogPost | undefined {
  const targetId = String(id);
  return BLOG_POSTS.find((post) => post.id === targetId || String(post.numericId) === targetId || post.slug === targetId);
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  if (!slug) return undefined;
  const normalized = decodeURIComponent(String(slug)).trim().toLowerCase();
  return BLOG_POSTS.find(
    (post) =>
      post.slug.toLowerCase() === normalized ||
      post.id === normalized ||
      String(post.numericId) === normalized
  );
}

export function getCategories(): string[] {
  const categories = Array.from(new Set(BLOG_POSTS.map((post) => post.category)));
  return ['All', ...categories];
}

export function getRelatedBlogs(currentId: string, category?: string, count: number = 3): BlogPost[] {
  const currentStrId = String(currentId);
  const filtered = BLOG_POSTS.filter((post) => post.id !== currentStrId && String(post.numericId) !== currentStrId);

  if (category && category !== 'All') {
    const sameCat = filtered.filter((post) => post.category === category);
    if (sameCat.length >= count) return sameCat.slice(0, count);
    const remaining = filtered.filter((post) => post.category !== category);
    return [...sameCat, ...remaining].slice(0, count);
  }

  return filtered.slice(0, count);
}
