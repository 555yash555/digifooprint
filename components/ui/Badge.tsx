'use client';

interface BadgeProps {
  available: boolean;
  domain: string;
  registerUrl?: string;
}

export default function Badge({ available, domain, registerUrl }: BadgeProps) {
  const content = (
    <span
      className={`
        inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium
        ${available
          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm'
          : 'bg-red-50 text-red-600 border border-red-200 shadow-sm'}
      `}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${available ? 'bg-emerald-500' : 'bg-red-400'}`} />
      {domain}
    </span>
  );

  if (available && registerUrl) {
    return (
      <a href={registerUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }

  return content;
}
