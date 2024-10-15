import Link from 'next/link';

import { DOCS } from '@/constants/path';
import { DATA_TAG } from '@/data/markdownDocument';
import { readMarkdownTagTree } from '@/utils/fs';

/* React Declaration */
export default async function Categories() {
  const tagTree = await readMarkdownTagTree(DOCS);

  return (
    <ul>
      {Object.keys(tagTree)
        .sort((a, b) => DATA_TAG[a].order - DATA_TAG[b].order)
        .map(key => {
          const {
            name: { en, ko },
            reactIcons,
          } = DATA_TAG[key];

          return (
            <li key={key}>
              <span>{reactIcons}</span>
              <Link href={`/categories/${key}`}>
                {en}
                <sub>{ko}</sub>
              </Link>
              <span>&nbsp;({tagTree[key].length})</span>
            </li>
          );
        })}
    </ul>
  );
}
