'use client';

import React from 'react';

interface BlogMarkdownRendererProps {
  content: string;
}

export const BlogMarkdownRenderer: React.FC<BlogMarkdownRendererProps> = ({ content }) => {
  if (!content) return null;

  // Split content into blocks by double newlines or single section headers
  const blocks = content
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter(Boolean);

  const renderFormattedText = (text: string) => {
    // Process bold (**text**) and italic (*text*)
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={index} className="italic text-slate-800">{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  return (
    <div className="space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
      {blocks.map((block, blockIndex) => {
        // H2 Header
        if (block.startsWith('## ')) {
          const headingText = block.replace(/^##\s+/, '');
          return (
            <div key={blockIndex} className="pt-4 pb-1 border-b border-slate-200/80">
              <h2 className="text-xl sm:text-2xl font-normal text-slate-900 tracking-tight">
                {headingText}
              </h2>
            </div>
          );
        }

        // H3 Header
        if (block.startsWith('### ')) {
          const headingText = block.replace(/^###\s+/, '');
          return (
            <h3 key={blockIndex} className="text-lg sm:text-xl font-semibold text-slate-900 pt-2 tracking-tight">
              {headingText}
            </h3>
          );
        }

        // Bulleted List Block
        if (block.split('\n').every((line) => line.trim().startsWith('- '))) {
          const listItems = block.split('\n').map((line) => line.trim().replace(/^-\s+/, ''));
          return (
            <ul key={blockIndex} className="space-y-2.5 my-4 pl-4 sm:pl-6 list-disc marker:text-sky-600">
              {listItems.map((item, itemIdx) => (
                <li key={itemIdx} className="text-slate-700 leading-relaxed">
                  {renderFormattedText(item)}
                </li>
              ))}
            </ul>
          );
        }

        // Paragraph
        return (
          <p key={blockIndex} className="text-slate-700 leading-relaxed text-sm sm:text-base">
            {renderFormattedText(block)}
          </p>
        );
      })}
    </div>
  );
};

export default BlogMarkdownRenderer;
