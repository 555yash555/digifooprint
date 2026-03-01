'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import CopyButton from '@/components/ui/CopyButton';
import { text } from '@/constants/text';
import { SeoData } from '@/lib/types';

interface SeoKeywordsProps {
  seo: SeoData;
}

export default function SeoKeywords({ seo }: SeoKeywordsProps) {
  return (
    <div>
      <SectionHeader
        title={text.results.seo.title}
        description={text.results.seo.description}
      />

      <div className="space-y-4">
        {/* Primary keyword */}
        <Card>
          <div className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Primary Keyword</div>
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-indigo-500">{seo.primary}</span>
            <CopyButton text={seo.primary} />
          </div>
        </Card>

        {/* Secondary keywords */}
        <Card>
          <div className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">Secondary Keywords</div>
          <div className="flex flex-wrap gap-2">
            {seo.secondary.map((kw) => (
              <span
                key={kw}
                className="px-4 py-2 rounded-xl bg-gray-50 text-base font-medium text-gray-700 border border-gray-100 shadow-sm"
              >
                {kw}
              </span>
            ))}
          </div>
        </Card>

        {/* Long tail */}
        <Card>
          <div className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">Long-tail Phrases</div>
          <div className="flex flex-wrap gap-2">
            {seo.longTail.map((phrase) => (
              <span
                key={phrase}
                className="px-4 py-2 rounded-xl bg-gray-50 text-sm font-medium text-gray-600 border border-gray-100 shadow-sm"
              >
                {phrase}
              </span>
            ))}
          </div>
        </Card>

        {/* Meta tags */}
        <Card>
          <div className="text-sm font-semibold text-gray-500 mb-5 uppercase tracking-wide">Meta Tags</div>
          <div className="space-y-3">
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">Title</div>
              <div className="text-lg font-bold text-gray-900 flex items-center gap-2">
                {seo.metaTitle}
                <CopyButton text={seo.metaTitle} />
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">Description</div>
              <div className="text-base text-gray-700 flex items-start gap-2 leading-relaxed">
                <span className="flex-1 font-medium">{seo.metaDescription}</span>
                <CopyButton text={seo.metaDescription} />
              </div>
            </div>
            <div>
              <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-1">OG Tags</div>
              <pre className="text-xs text-gray-600 bg-gray-50 border border-gray-200 p-3 rounded-lg overflow-x-auto">
{`<meta property="og:title" content="${seo.ogTags.title}" />
<meta property="og:description" content="${seo.ogTags.description}" />
<meta property="og:type" content="${seo.ogTags.type}" />`}
              </pre>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
