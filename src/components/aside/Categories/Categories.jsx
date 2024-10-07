import Link from 'next/link';

import { DOCS } from '@/constants/path';
import { readTagTree } from '@/utils/fs/tagTree';

/* React Declaration */
export default async function Categories() {
  const tagTree = await readTagTree(DOCS);

  return (
    <ul>
      {Object.keys(tagTree).map(key => (
        <li key={key}>
          <Link href={`/categories/${key}`}>{key}</Link>
          <span>&nbsp;({tagTree[key].length})</span>
        </li>
      ))}
    </ul>
  );
}
