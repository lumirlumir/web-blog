import Link from 'next/link';

import { PATH_DOCS } from '@/constants';
import { MARKDOWN_DOCUMENT_DATA_TAG_META } from '@/data';
import { readMarkdownTagTree } from '@/utils/fs';

/* React Declaration */
export default async function Categories() {
  const tagTree = await readMarkdownTagTree(PATH_DOCS);

  return (
    <ul>
      {Object.keys(tagTree)
        .sort(
          (a, b) =>
            MARKDOWN_DOCUMENT_DATA_TAG_META[a].order -
            MARKDOWN_DOCUMENT_DATA_TAG_META[b].order,
        )
        .map(key => {
          const {
            name: { en, ko },
            reactIcons,
          } = MARKDOWN_DOCUMENT_DATA_TAG_META[key];

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
