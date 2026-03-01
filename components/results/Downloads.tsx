'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { text } from '@/constants/text';
import { downloadMarkdown } from '@/lib/utils/markdown';

interface DownloadsProps {
  brandingMd: string;
  copywriteMd: string;
}

export default function Downloads({ brandingMd, copywriteMd }: DownloadsProps) {
  return (
    <div>
      <SectionHeader
        title={text.results.downloads.title}
        description={text.results.downloads.description}
      />

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="secondary"
          onClick={() => downloadMarkdown(brandingMd, 'branding.md')}
          className="flex-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {text.results.downloads.branding}
        </Button>
        <Button
          variant="secondary"
          onClick={() => downloadMarkdown(copywriteMd, 'copywrite.md')}
          className="flex-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {text.results.downloads.copywrite}
        </Button>
      </div>
    </div>
  );
}
