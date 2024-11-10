import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface DealTimerProps {
  expiryDate: string;
}

export default function DealTimer({ expiryDate }: DealTimerProps) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(expiryDate).getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setTimeLeft('Expired');
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);

      if (days > 0) {
        setTimeLeft(`${days}d ${hours}h left`);
      } else if (hours > 0) {
        setTimeLeft(`${hours}h ${minutes}m left`);
      } else {
        setTimeLeft(`${minutes}m left`);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(timer);
  }, [expiryDate]);

  return (
    <div className="flex items-center text-gray-600">
      <Clock className="h-4 w-4 mr-1" />
      <span>{timeLeft}</span>
    </div>
  );
}