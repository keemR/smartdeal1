import React from 'react';
import DealCard from '../components/DealCard';
import { Tag } from 'lucide-react';

interface CategoryPageProps {
  title: string;
  description: string;
  deals: Array<{
    title: string;
    description: string;
    discount: string;
    expiryDate: string;
    category: string;
    affiliateLink: string;
    image: string;
  }>;
}

export default function CategoryPage({ title, description, deals }: CategoryPageProps) {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-8">
        <div className="flex items-center space-x-2">
          <Tag className="h-6 w-6 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        </div>
        <p className="mt-4 text-lg text-gray-600">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal, index) => (
          <DealCard key={index} {...deal} />
        ))}
      </div>
    </div>
  );
}