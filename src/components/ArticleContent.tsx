'use client';

import type { Blog } from '@/types/microcms';
import CodeStyleLoader from './CodeStyleLoader';

export default function ArticleContent({ blog }: { blog: Blog }) {
  const isCodeStyle = blog['blog-style']?.[0] === 'コード';
  const contentHtml = isCodeStyle ? blog.html : blog.content;

  const wrapperClassName = isCodeStyle
    ? "prose prose-lg max-w-none code-style-content"
    : "prose prose-lg max-w-none";

  return (
    <>
      {isCodeStyle && <CodeStyleLoader />}
      <div
        className={wrapperClassName}
        dangerouslySetInnerHTML={{ __html: contentHtml || '' }}
      />
    </>
  );
} 