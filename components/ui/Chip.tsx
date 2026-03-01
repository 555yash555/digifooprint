'use client';

interface ChipProps {
  label: string;
  icon?: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function Chip({ label, icon, selected = false, onClick }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium
        transition-all duration-200 cursor-pointer
        ${selected
          ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500'
          : 'bg-[#1C1C1E] text-gray-400 border border-[#2A2A2D] hover:border-[#3A3A3D] hover:text-gray-200'}
      `}
    >
      {icon && <span className="text-base">{icon}</span>}
      {label}
    </button>
  );
}
