import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

interface TrustSignalsProps {
  merchant: string;
  verified: boolean;
}

export default function TrustSignals({ merchant, verified }: TrustSignalsProps) {
  return (
    <div className="flex items-center justify-between mb-4 text-sm">
      <div className="flex items-center text-gray-600">
        <Shield className="h-4 w-4 mr-1" />
        <span>{merchant}</span>
      </div>
      {verified && (
        <div className="flex items-center text-green-600">
          <CheckCircle className="h-4 w-4 mr-1" />
          <span>Verified</span>
        </div>
      )}
    </div>
  );
}