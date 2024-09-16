import { join } from 'path';

import Link from 'next/link';

import { DOCS } from '@/constants/path';
import { getDirTree } from '@/utils/dirTree';

export default async function Categories() {
  const dirTree = await getDirTree(DOCS);

  return <>{renderDirTree(dirTree)}</>;
}

function renderDirTree(dirTree, basePath = '') {
  return (
    <ul>
      {dirTree.map(dirTreeNode => {
        const currPath = join(basePath, dirTreeNode.name);

        return (
          <li key={currPath}>
            {dirTreeNode.name.endsWith('.md') ? (
              <Link href={`/docs/${currPath.replace('.md', '')}`}>
                {dirTreeNode.name.replace('.md', '')}
              </Link>
            ) : (
              <>
                <span>{dirTreeNode.name}</span>
                {renderDirTree(dirTreeNode.children, currPath)}
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}
