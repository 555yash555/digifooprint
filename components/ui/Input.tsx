'use client';

import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function TextInput({ label, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm text-gray-400 mb-2">{label}</label>
      )}
      <input
        className={`
          w-full px-4 py-3 rounded-xl bg-[#1C1C1E] border border-[#2A2A2D]
          text-gray-200 placeholder-gray-600 text-sm
          focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
          transition-colors duration-200
          ${className}
        `}
        {...props}
      />
    </div>
  );
}

export function Textarea({ label, className = '', ...props }: TextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm text-gray-400 mb-2">{label}</label>
      )}
      <textarea
        className={`
          w-full px-4 py-3 rounded-xl bg-[#1C1C1E] border border-[#2A2A2D]
          text-gray-200 placeholder-gray-600 text-sm resize-none
          focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
          transition-colors duration-200
          ${className}
        `}
        rows={5}
        {...props}
      />
    </div>
  );
}
