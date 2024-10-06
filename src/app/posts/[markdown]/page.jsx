import { promises as fs } from 'fs';
import { join } from 'path';

import { DOCS } from '@/constants/path';
import markdownToJsx, { readMarkdownWithFrontMatter } from '@/utils/markdownToJsx';
import markdownToText from '@/utils/markdownToText';

/* Custom Declaration */
function getFilePath(params) {
  return join(DOCS, `${params.markdown}.md`);
}

/* Next.js Declaration */
// Control what happens when a dynamic segment is visited that was not generated with `generateStaticParams`.
export const dynamicParams = false;

export async function generateStaticParams() {
  const paths = await fs.readdir(DOCS, {
    recursive: true,
  });

  return paths
    .filter(path => path.endsWith('.md'))
    .map(path => ({
      markdown: path.replace(/\.md$/, ''),
    }));
}

export async function generateMetadata({ params }) {
  const {
    data: { title, description },
  } = await readMarkdownWithFrontMatter(getFilePath(params));

  return {
    title: markdownToText(title),
    description: markdownToText(description),
  };
}

export default async function Page({ params }) {
  return <>{await markdownToJsx(getFilePath(params))}</>;
}