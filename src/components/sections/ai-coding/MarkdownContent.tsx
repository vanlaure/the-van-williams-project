import { useMemo } from 'react';

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const html = useMemo(() => {
    return content
      .split('\n')
      .map(line => {
        if (line.startsWith('### ')) {
          return `<h3 class="text-lg font-semibold text-white mt-6 mb-3">${line.slice(4)}</h3>`;
        }
        if (line.startsWith('• ')) {
          return `<li class="text-gray-300 ml-4">${line.slice(2)}</li>`;
        }
        if (line.startsWith('[') && line.includes('](')) {
          const [text, url] = line.slice(1, -1).split('](');
          return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">${text}<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg></a>`;
        }
        if (line === '') {
          return '</ul><ul class="list-none space-y-1 my-2">';
        }
        return line;
      })
      .join('\n');
  }, [content]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}