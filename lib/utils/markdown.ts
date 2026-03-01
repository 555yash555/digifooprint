async function triggerDownload(content: string, filename: string, isBase64 = false) {
  const res = await fetch('/api/download', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content, filename }),
  });

  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

export function downloadMarkdown(content: string, filename: string): void {
  triggerDownload(content, filename);
}

export async function downloadZipContent(base64: string, filename: string): Promise<void> {
  await triggerDownload(base64, filename, true);
}
