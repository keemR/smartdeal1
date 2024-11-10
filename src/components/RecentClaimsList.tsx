import React from 'react';
import { User } from 'lucide-react';

export default function RecentClaimsList() {
  const recentClaims = [
    { name: 'John D.', time: '2 mins ago' },
    { name: 'Sarah M.', time: '5 mins ago' },
    { name: 'Alex R.', time: '8 mins ago' }
  ];

  return (
    <div className="space-y-2">
      {recentClaims.map((claim, index) => (
        <div key={index} className="flex items-center text-sm text-gray-600">
          <User className="h-4 w-4 mr-2 text-gray-400" />
          <span className="font-medium">{claim.name}</span>
          <span className="mx-1">claimed</span>
          <span className="text-gray-500">{claim.time}</span>
        </div>
      ))}
    </div>
  );
}