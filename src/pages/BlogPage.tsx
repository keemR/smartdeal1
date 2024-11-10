import React from 'react';
import BlogCard from '../components/BlogCard';
import { Book } from 'lucide-react';
import { blogPosts } from '../data/blog';

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-8">
        <div className="flex items-center space-x-2">
          <Book className="h-6 w-6 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-900">Savings Tips & Guides</h1>
        </div>
        <p className="mt-4 text-lg text-gray-600">
          Expert advice on finding the best deals and maximizing your savings across all categories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}