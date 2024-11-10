import React, { useState, useEffect } from 'react';
import { ExternalLink, Clock, Users, Flame, Eye, Gift, Trophy, ThumbsUp, Star, Shield, CheckCircle } from 'lucide-react';
import TrustSignals from './TrustSignals';
import RecentClaimsList from './RecentClaimsList';
import DealTimer from './DealTimer';
import { generateStructuredData } from '../utils/seoHelpers';

interface DealProps {
  title: string;
  description: string;
  discount: string;
  expiryDate: string;
  category: string;
  affiliateLink: string;
  image: string;
  claimedCount?: number;
  remainingCount?: number;
  rating?: number;
  verified?: boolean;
  regularPrice?: string;
  discountedPrice?: string;
  merchant?: string;
}

export default function DealCard({
  title,
  description,
  discount,
  expiryDate,
  category,
  affiliateLink,
  image,
  claimedCount = Math.floor(Math.random() * 500) + 100,
  remainingCount = Math.floor(Math.random() * 50) + 10,
  rating = (Math.random() * 1 + 4).toFixed(1),
  verified = Math.random() > 0.3,
  regularPrice = "$99.99",
  discountedPrice = "$49.99",
  merchant = "Trusted Store"
}: DealProps) {
  const [activeViewers, setActiveViewers] = useState(Math.floor(Math.random() * 15) + 5);
  const progress = ((claimedCount / (claimedCount + remainingCount)) * 100).toFixed(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveViewers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.max(3, Math.min(20, prev + change));
      });
    }, 30000);

    return () => clearInterval(timer);
  }, []);

  // Generate structured data for SEO
  const structuredData = generateStructuredData({
    name: title,
    description,
    price: discountedPrice,
    regularPrice,
    merchant,
    category,
    image,
    rating,
    reviewCount: claimedCount,
    availability: remainingCount > 0 ? 'InStock' : 'OutOfStock',
    validUntil: expiryDate
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl border border-gray-100">
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="relative" role="img" aria-label={`Deal image for ${title}`}>
        <img
          src={image}
          alt={`${title} - Save ${discount}`}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse shadow-lg">
          <span aria-label={`Discount of ${discount}`}>{discount}</span>
        </div>
        {remainingCount < 20 && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center shadow-lg">
            <Flame className="h-4 w-4 mr-1" aria-hidden="true" />
            <span>Only {remainingCount} left!</span>
          </div>
        )}
        {verified && (
          <div className="absolute bottom-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center shadow-lg">
            <Trophy className="h-3 w-3 mr-1" aria-hidden="true" />
            <span>Verified Deal</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm text-indigo-600 font-semibold flex items-center">
            <Gift className="h-4 w-4 mr-1" aria-hidden="true" />
            <span>{category}</span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center text-yellow-500 mr-2">
              <Star className="h-4 w-4 fill-current" aria-hidden="true" />
              <span className="ml-1 text-sm font-medium">{rating}</span>
            </div>
            {verified && (
              <div className="flex items-center text-green-600 text-xs">
                <CheckCircle className="h-4 w-4 mr-1" aria-hidden="true" />
                <span>Verified Merchant</span>
              </div>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <TrustSignals merchant={merchant} verified={verified} />
        
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-green-600">
              <Eye className="h-4 w-4 mr-1" aria-hidden="true" />
              <span>{activeViewers} people viewing</span>
            </div>
            <DealTimer expiryDate={expiryDate} />
          </div>

          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 line-through text-sm">{regularPrice}</span>
              <span className="text-2xl font-bold text-green-600">{discountedPrice}</span>
            </div>
            <div className="flex items-center text-green-600 text-sm">
              <Shield className="h-4 w-4 mr-1" aria-hidden="true" />
              <span>Price Guaranteed</span>
            </div>
          </div>

          <RecentClaimsList />

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" aria-hidden="true" />
              <span>{claimedCount} claimed</span>
            </div>
            {remainingCount < 50 && (
              <span className="text-red-500 font-medium animate-pulse">
                {remainingCount} deals remaining
              </span>
            )}
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2" role="progressbar" aria-valuenow={parseInt(progress)} aria-valuemin={0} aria-valuemax={100}>
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${
                remainingCount < 20 
                  ? 'bg-gradient-to-r from-red-500 to-pink-500' 
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600'
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>

          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:scale-105"
            onClick={() => {
              // Track conversion event
              if (window.gtag) {
                window.gtag('event', 'deal_click', {
                  deal_id: title,
                  category: category,
                  value: discountedPrice
                });
              }
            }}
          >
            Get Deal Now
            <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>

          {remainingCount < 10 && (
            <div className="text-center space-y-1">
              <p className="text-xs text-red-500 animate-pulse font-semibold">
                ⚡ High demand! Deals are selling out quickly
              </p>
              <p className="text-xs text-gray-500">
                Average claim time: {Math.floor(Math.random() * 3) + 1} minutes
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}