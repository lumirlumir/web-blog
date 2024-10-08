import { join } from 'path';

import { DOCS, EXTENSION } from '@/constants/path';
import { readMarkdownFile, readMarkdownFilesFromDir } from '@/utils/fs';
import { markdownToText, markdownToJsx } from '@/utils/markup';

/* Custom Declaration */
const { md, mdRegExp } = EXTENSION;

function getFilePath(params) {
  return join(DOCS, `${params.markdown}${md}`);
}

/* Next.js Declaration */
// Control what happens when a dynamic segment is visited that was not generated with `generateStaticParams`.
export const dynamicParams = false;

export async function generateStaticParams() {
  const markdownDocuments = await readMarkdownFilesFromDir(DOCS);
  const paths = markdownDocuments.map(markdownDocument => markdownDocument.basename);

  return paths.map(path => ({
    markdown: path.replace(mdRegExp, ''),
  }));
}

export async function generateMetadata({ params }) {
  const {
    data: { title, description },
  } = await readMarkdownFile(getFilePath(params));

  return {
    title: markdownToText(title),
    description: markdownToText(description),
  };
}

export default async function Page({ params }) {
  return <>{await markdownToJsx(getFilePath(params))}</>;
}
