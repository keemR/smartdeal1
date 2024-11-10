import React from 'react';
import DealCard from '../components/DealCard';
import BlogCard from '../components/BlogCard';
import TrustBadges from '../components/TrustBadges';
import NewsletterPopup from '../components/NewsletterPopup';
import { Search, TrendingUp, Zap, Star } from 'lucide-react';
import { deals } from '../data/deals';

export default function HomePage() {
  const featuredDeals = [
    deals.digital[0],
    deals.grocery[0],
    deals.lifestyle[0],
    deals.travel[0]
  ];

  const latestBlogs = [
    {
      title: "Top 10 Subscription Deals This Month",
      excerpt: "Discover the best subscription deals across streaming, gaming, and productivity tools.",
      date: "2024-03-15",
      author: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      slug: "top-subscription-deals"
    },
    {
      title: "5 Ways to Save on Travel in 2024",
      excerpt: "Expert tips on finding the best travel deals and maximizing your vacation budget.",
      date: "2024-03-10",
      author: "Mike Peters",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      slug: "save-on-travel"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 -mt-8 mb-12 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
              <Zap className="h-4 w-4 mr-1" />
              New deals added daily
            </span>
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Save Smart, Live Better
          </h1>
          <p className="mt-6 text-xl text-indigo-100">
            Join 50,000+ smart shoppers discovering exclusive deals daily.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="mt-3 sm:mt-0 sm:ml-3 relative rounded-md shadow-sm w-full max-w-xl">
              <input
                type="text"
                className="block w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12"
                placeholder="Search for deals..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Featured Deals */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Star className="h-6 w-6 mr-2 text-indigo-600" />
            Featured Deals
          </h2>
          <a href="/all-deals" className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
            View all deals →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDeals.map((deal, index) => (
            <DealCard key={index} {...deal} />
          ))}
        </div>
      </section>

      {/* Trending Deals */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <TrendingUp className="h-6 w-6 mr-2 text-indigo-600" />
            Trending Now
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDeals.map((deal, index) => (
            <DealCard key={index} {...deal} />
          ))}
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Savings Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestBlogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </section>

      {/* Newsletter Popup */}
      <NewsletterPopup />
    </>
  );
}