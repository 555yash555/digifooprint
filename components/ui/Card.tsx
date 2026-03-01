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
      gradientColor={selected ? "#818cf8" : "#e5e7eb"}
      gradientOpacity={selected ? 0.4 : 0.15}
      className={cn(
        "rounded-2xl border p-5 transition-all duration-200 h-full !flex-col !items-start",
        selected
          ? 'border-indigo-200 bg-indigo-50/80 shadow-sm shadow-indigo-100/50'
          : 'border-gray-200 bg-white/60 shadow-sm',
        hoverable && !selected ? 'hover:border-gray-300 hover:bg-white/90 hover:shadow-md cursor-pointer' : '',
        className
      )}
      {...props as any}
    >
      {children}
    </MagicCard>
  );
}
