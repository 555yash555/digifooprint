import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { content, filename } = await request.json();

  if (!content || !filename) {
    return NextResponse.json({ error: 'Missing content or filename' }, { status: 400 });
  }

  const isZip = filename.endsWith('.zip');
  const body = isZip ? Buffer.from(content, 'base64') : content;
  const contentType = isZip ? 'application/zip' : 'application/octet-stream';

  return new NextResponse(body, {
    headers: {
      'Content-Type': contentType,
      'Content-Disposition': `attachment; filename="${filename}"`,
    },
  });
}
