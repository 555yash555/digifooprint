'use client';

import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { BrandName } from '@/lib/types';

interface NameCardProps {
  brandName: BrandName;
  selected: boolean;
  onClick: () => void;
}

export default function NameCard({ brandName, selected, onClick }: NameCardProps) {
  return (
    <Card selected={selected} hoverable onClick={onClick} className="p-6">
      <h3 className={`text-2xl font-bold mb-4 transition-colors ${selected ? 'text-indigo-900' : 'text-gray-900'}`}>{brandName.name}</h3>
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
    </Card>
  );
}
