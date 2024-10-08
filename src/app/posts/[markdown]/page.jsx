import { join } from 'path';

import { DOCS, EXTENSION } from '@/constants/path';
import { readFileForMarkdown, readDirByExtension } from '@/utils/fs';
import markdownToJsx, { markdownToText } from '@/utils/markdownToJsx';

/* Custom Declaration */
const { md, mdRegExp } = EXTENSION;

function getFilePath(params) {
  return join(DOCS, `${params.markdown}${md}`);
}

/* Next.js Declaration */
// Control what happens when a dynamic segment is visited that was not generated with `generateStaticParams`.
export const dynamicParams = false;

export async function generateStaticParams() {
  const paths = await readDirByExtension(DOCS, md);

  return paths.map(path => ({
    markdown: path.replace(mdRegExp, ''),
  }));
}

export async function generateMetadata({ params }) {
  const { title, description } = await readFileForMarkdown(getFilePath(params), 'data');

  return {
    title: markdownToText(title),
    description: markdownToText(description),
  };
}

export default async function Page({ params }) {
  return <>{await markdownToJsx(getFilePath(params))}</>;
}
