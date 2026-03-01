'use client';

import { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  fullWidth?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-gray-900 hover:bg-black text-white shadow-md hover:shadow-lg hover:shadow-gray-900/20 active:scale-[0.98]',
  secondary:
    'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 active:scale-[0.98]',
  ghost:
    'bg-transparent hover:bg-gray-100 text-gray-500 hover:text-gray-900 active:scale-[0.98]',
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
        inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
        font-medium text-sm transition-all duration-200 cursor-pointer
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
