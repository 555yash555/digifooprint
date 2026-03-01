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
          w-full px-5 py-4 rounded-xl bg-white/70 backdrop-blur-md border border-white/60
          text-gray-900 placeholder-gray-400 text-sm shadow-sm ring-1 ring-black/5
          focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500
          transition-all duration-300 hover:bg-white/90
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
          w-full px-5 py-4 rounded-xl bg-white/70 backdrop-blur-md border border-white/60
          text-gray-900 placeholder-gray-400 text-sm resize-none shadow-sm ring-1 ring-black/5
          focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500
          transition-all duration-300 hover:bg-white/90
          ${className}
        `}
        rows={5}
        {...props}
      />
    </div>
  );
}
