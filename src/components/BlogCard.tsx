import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  slug: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  author,
  image,
  slug,
}: BlogProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <time dateTime={date}>{date}</time>
          <span className="mx-1">•</span>
          <span>{author}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a
          href={`/blog/${slug}`}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </article>
  );
}