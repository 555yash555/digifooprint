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
        inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium
        transition-all duration-300 cursor-pointer
        ${selected
          ? 'bg-indigo-500 text-white border-transparent ring-2 ring-indigo-500 shadow-md shadow-indigo-500/30 scale-[1.05]'
          : 'bg-white/80 backdrop-blur-sm text-gray-600 border border-gray-200 hover:border-indigo-300 hover:text-gray-900 hover:bg-white shadow-sm'}
      `}
    >
      {Icon && <Icon className="w-4 h-4 opacity-70" />}
      {label}
    </button>
  );
}
