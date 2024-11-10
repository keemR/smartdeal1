import React from 'react';
import { Shield, Users, Clock, Award } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: <Users className="h-6 w-6" />,
      count: "50K+",
      label: "Active Members"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      count: "100%",
      label: "Verified Deals"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      count: "24/7",
      label: "Deal Updates"
    },
    {
      icon: <Award className="h-6 w-6" />,
      count: "$2M+",
      label: "Member Savings"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
      {badges.map((badge, index) => (
        <div key={index} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
          <div className="text-indigo-600">{badge.icon}</div>
          <div className="mt-2 text-2xl font-bold text-gray-900">{badge.count}</div>
          <div className="text-sm text-gray-600">{badge.label}</div>
        </div>
      ))}
    </div>
  );
}