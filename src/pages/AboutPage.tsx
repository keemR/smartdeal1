import React from 'react';
import { Users, Target, Shield } from 'lucide-react';

export default function AboutPage() {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Community-Driven',
      description: 'We curate the best deals based on real user experiences and feedback.',
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Verified Deals',
      description: 'Every deal is thoroughly checked and verified before being listed.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Trusted Platform',
      description: 'Your privacy and security are our top priorities.',
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">About SaveSmart</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We're dedicated to helping you save money on the things you love. Our platform connects
          smart shoppers with the best deals across digital subscriptions, groceries, lifestyle products,
          and travel experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center items-center w-12 h-12 mx-auto bg-indigo-100 rounded-xl text-indigo-600">
              {feature.icon}
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
            <p className="mt-2 text-base text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600">
          At SaveSmart, we believe everyone deserves access to great deals and savings opportunities.
          Our mission is to simplify the process of finding and using coupons and discounts,
          making it easier for you to save money on your everyday purchases and special occasions alike.
        </p>
      </div>
    </div>
  );
}