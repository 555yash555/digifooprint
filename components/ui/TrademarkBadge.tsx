'use client';

import { ExternalLink } from 'lucide-react';

interface TrademarkRiskProps {
  risk: number;
  name: string;
}

export default function TrademarkRisk({ risk, name }: TrademarkRiskProps) {
  const url = `https://tmsearch.uspto.gov/search/search-results?q=${encodeURIComponent(name)}`;
  
  // Color logic based on risk level
  const isHigh = risk >= 70;
  const isMedium = risk >= 40 && risk < 70;
  
  const color = isHigh 
    ? '#ef4444' // red-500
    : isMedium 
      ? '#f59e0b' // amber-500
      : '#6366f1'; // indigo-500

  const bgColor = isHigh
    ? 'bg-red-50/50 border-red-100/50'
    : isMedium
      ? 'bg-amber-50/50 border-amber-100/50'
      : 'bg-indigo-50/50 border-indigo-100/50';

  const textColor = isHigh
    ? 'text-red-600'
    : isMedium
      ? 'text-amber-600'
      : 'text-indigo-600';

  // Circle math
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (risk / 100) * circumference;

  return (
    <div className={`flex items-center justify-between mt-4 pt-4 border-t border-gray-100/50`}>
      <div className="flex items-center gap-3">
        {/* Circular Progress */}
        <div className="relative w-10 h-10">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="20"
              cy="20"
              r={radius}
              stroke="currentColor"
              strokeWidth="3.5"
              fill="transparent"
              className="text-gray-100"
            />
            <circle
              cx="20"
              cy="20"
              r={radius}
              stroke={color}
              strokeWidth="3.5"
              fill="transparent"
              strokeDasharray={circumference}
              style={{ strokeDashoffset, transition: 'stroke-dashoffset 1s ease-in-out' }}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10px] font-black tracking-tighter" style={{ color }}>{risk}%</span>
          </div>
        </div>

        <div className="flex flex-col">
          <span className={`text-[10px] font-black uppercase tracking-widest ${textColor}`}>
            Trademark Risk
          </span>
          <span className="text-[10px] font-bold text-gray-400 capitalize">
            {isHigh ? 'High Risk' : isMedium ? 'Moderate Risk' : 'Low Risk'}
          </span>
        </div>
      </div>
      
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[10px] font-bold text-gray-400 hover:text-indigo-500 flex items-center gap-1 transition-colors uppercase tracking-widest"
      >
        Verify
        <ExternalLink className="w-2.5 h-2.5" />
      </a>
    </div>
  );
}
