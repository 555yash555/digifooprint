'use client';

import { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  fullWidth?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-gray-900 hover:bg-black text-white shadow-xl hover:shadow-2xl hover:shadow-gray-900/10 active:scale-[0.97]',
  secondary:
    'bg-white/80 backdrop-blur-md hover:bg-white text-gray-900 border border-gray-100 shadow-sm active:scale-[0.97]',
  ghost:
    'bg-transparent hover:bg-gray-100 text-gray-500 hover:text-gray-900 active:scale-[0.97]',
};

export default function Button({
  variant = 'primary',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-[20px]
        font-bold text-base tracking-tight transition-all duration-300 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
