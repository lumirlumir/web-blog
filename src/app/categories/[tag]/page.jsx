import Link from 'next/link';

import { DOCS, EXTENSION } from '@/constants/path';
import { readMarkdownTagTree } from '@/utils/fs';
import { markdownToText } from '@/utils/markup';

const { mdRegExp } = EXTENSION;

export default async function Page({ params }) {
  const tagTree = await readMarkdownTagTree(DOCS);

  return tagTree[params.tag].map(({ basename, data: { title, description, tags } }) => (
    <div key={basename}>
      <h2>
        <Link href={`/posts/${basename.replace(mdRegExp, '')}`}>
          {markdownToText(title)}
        </Link>
      </h2>
      <p>{markdownToText(description)}</p>
      <p>{tags.join(', ')}</p>
      <hr />
    </div>
  ));
}
