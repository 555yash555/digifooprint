'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import TrademarkRisk from '@/components/ui/TrademarkBadge';
import { BrandName } from '@/lib/types';
import { Sparkles, Loader2, ChevronRight } from 'lucide-react';

interface NameCardProps {
  brandName: BrandName;
  selectedName: string | null;
  onClick: (name: string) => void;
  onFindSimilar?: (name: string) => Promise<void>;
  isChild?: boolean;
}

export default function NameCard({ 
  brandName, 
  selectedName, 
  onClick, 
  onFindSimilar,
  isChild = false 
}: NameCardProps) {
  const [loadingSimilar, setLoadingSimilar] = useState(false);
  const selected = selectedName === brandName.name;

  const handleSimilarClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!onFindSimilar) return;
    setLoadingSimilar(true);
    await onFindSimilar(brandName.name);
    setLoadingSimilar(false);
  };

  return (
    <div className={`flex flex-col gap-3 ${isChild ? 'ml-4 sm:ml-8 relative before:absolute before:left-[-12px] sm:before:left-[-20px] before:top-[-20px] before:bottom-1/2 before:w-[2px] before:bg-gray-200 after:absolute after:left-[-12px] sm:after:left-[-20px] after:top-1/2 after:w-[12px] sm:after:w-[20px] after:h-[2px] after:bg-gray-200' : ''}`}>
      <Card selected={selected} hoverable onClick={() => onClick(brandName.name)} className={`${isChild ? 'p-3 sm:p-4' : 'p-4 sm:p-6'} relative group`}>
        <div className="flex justify-between items-start">
          <h3 className={`${isChild ? 'text-xl' : 'text-2xl'} font-black mb-3 transition-colors tracking-tight ${selected ? 'text-indigo-900' : 'text-gray-900'}`}>
            {brandName.name}
          </h3>
          
          {!isChild && onFindSimilar && !brandName.similarNames && (
            <button
              onClick={handleSimilarClick}
              disabled={loadingSimilar}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest bg-indigo-50 text-indigo-600 border border-indigo-100 transition-all hover:bg-indigo-600 hover:text-white disabled:opacity-50"
            >
              {loadingSimilar ? (
                <Loader2 className="w-3 h-3 animate-spin" />
              ) : (
                <Sparkles className="w-3 h-3" />
              )}
              {loadingSimilar ? 'Thinking...' : 'More Like This'}
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {brandName.domains.map((d) => (
            <Badge
              key={d.domain}
              domain={d.domain}
              available={d.available}
              registerUrl={d.registerUrl}
            />
          ))}
        </div>
        
        {brandName.trademarkRisk !== undefined && (
          <TrademarkRisk risk={brandName.trademarkRisk} name={brandName.name} />
        )}
      </Card>

      {brandName.similarNames && brandName.similarNames.map((child, idx) => (
        <NameCard
          key={`${child.name}-${idx}`}
          brandName={child}
          selectedName={selectedName}
          onClick={onClick}
          isChild={true}
        />
      ))}
    </div>
  );
}
