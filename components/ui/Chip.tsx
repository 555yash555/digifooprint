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
        transition-all duration-200 cursor-pointer
        ${selected
          ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-sm shadow-indigo-100'
          : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:text-gray-900 hover:bg-gray-50 shadow-sm'}
      `}
    >
      {Icon && <Icon className="w-4 h-4 opacity-70" />}
      {label}
    </button>
  );
}
