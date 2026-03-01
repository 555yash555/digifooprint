'use client';
import React from 'react';

interface ChipProps {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  selected?: boolean;
  onClick?: () => void;
}

export default function Chip({ label, icon: Icon, selected = false, onClick }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base font-semibold
        transition-all duration-300 cursor-pointer
        ${selected
          ? 'bg-indigo-600 text-white border-transparent shadow-lg shadow-indigo-600/25 scale-[1.03]'
          : 'bg-white/80 backdrop-blur-sm text-gray-600 border border-gray-100 hover:border-indigo-300 hover:text-gray-900 hover:bg-white shadow-sm'}
      `}
    >
      {Icon && <Icon className="w-4 h-4 opacity-70" />}
      {label}
    </button>
  );
}
