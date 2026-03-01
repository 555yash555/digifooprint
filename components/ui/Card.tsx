'use client';

import { HTMLAttributes } from 'react';
import { MagicCard } from '@/components/magicui/magic-card';
import { cn } from '@/lib/utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  hoverable?: boolean;
}

export default function Card({
  selected = false,
  hoverable = false,
  className = '',
  children,
  ...props
}: CardProps) {
  return (
    <MagicCard
      gradientColor={selected ? "#4f46e5" : "#e5e7eb"}
      gradientOpacity={selected ? 0.3 : 0.15}
      className={cn(
        "rounded-2xl border p-5 transition-all duration-300 h-full !flex-col !items-start",
        selected
          ? 'border-indigo-500 ring-2 ring-indigo-500 bg-indigo-50/90 shadow-lg shadow-indigo-500/25 scale-[1.02]'
          : 'border-gray-200 bg-white/60 shadow-sm',
        hoverable && !selected ? 'hover:border-indigo-300 hover:bg-white/90 hover:shadow-md cursor-pointer' : '',
        className
      )}
      {...props as any}
    >
      {children}
    </MagicCard>
  );
}
