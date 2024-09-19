import { promises as fs } from 'fs';
import { join, sep } from 'path';

import { DOCS } from '@/constants/path';
import markdownToJsx, { readMarkdownWithFrontMatter } from '@/utils/markdownToJsx';

/* Custom Declaration */
function getFilePath(params) {
  return join(DOCS, `${params.categories.join(sep)}.md`);
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
      categories: path.replace(/\.md$/, '').split(sep),
    }));
}

export async function generateMetadata({ params }) {
  const {
    data: { title, description },
  } = await readMarkdownWithFrontMatter(getFilePath(params));

  return {
    title,
    description,
  };
}

export default async function Page({ params }) {
  return <>{await markdownToJsx(getFilePath(params))}</>;
}
