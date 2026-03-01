'use client';

interface BadgeProps {
  available: boolean;
  domain: string;
  registerUrl?: string;
}

export default function Badge({ available, domain, registerUrl }: BadgeProps) {
  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(domain);
    // Visual feedback could be added here, but the badge is tiny.
  };

  const content = (
    <span
      className={`
        group relative inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold tracking-tight
        transition-all duration-300
        ${available
          ? 'bg-emerald-50/50 backdrop-blur-sm text-emerald-700 border border-emerald-500/20 shadow-sm hover:border-emerald-500/40'
          : 'bg-red-50/50 backdrop-blur-sm text-red-600 border border-red-500/20 shadow-sm'}
      `}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${available ? 'bg-emerald-500 animate-pulse' : 'bg-red-400'}`} />
      {domain}
      
      <button 
        onClick={handleCopy}
        className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity p-0.5 hover:bg-black/5 rounded"
        title="Copy Domain"
      >
        <svg className="w-3 h-3 text-current/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </button>
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
