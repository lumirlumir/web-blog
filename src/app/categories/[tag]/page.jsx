import Link from 'next/link';

import { DOCS, EXTENSION } from '@/constants/path';
import { readTagTree } from '@/utils/fs/tagTree';
import { markdownToText } from '@/utils/markdownToJsx';

const { mdRegExp } = EXTENSION;

export default async function Page({ params }) {
  const tagTree = await readTagTree(DOCS);

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
