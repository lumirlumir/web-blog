import { promises as fs } from 'fs';
import { join, sep } from 'path';

import { DOCS } from '@/constants/path';
import markdownToJsx from '@/utils/markdownToJsx';

export async function generateStaticParams() {
  const paths = await fs.readdir(DOCS, {
    encoding: 'utf-8',
    recursive: true,
  });

  return paths
    .filter(path => path.endsWith('.md'))
    .map(path => ({
      categories: path.replace(/\\/g, '/').replace('.md', '').split('/'),
    }));
}

export default async function Page({ params }) {
  const filePath = join(DOCS, `${params.categories.join(sep)}.md`);

  return <>{await markdownToJsx(filePath)}</>;
}
