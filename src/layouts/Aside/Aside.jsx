import { promises as fs } from 'fs';
import Link from 'next/link';

import { DOCS } from '@/constants/path';

import styles from './Aside.module.scss';

export default async function Aside() {
  return (
    <aside className={styles.aside}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
      {renderDirTree(buildDirTree(dirs))}
    </aside>
  );
}

const dirs = await fs.readdir(DOCS, {
  encoding: 'utf-8',
  recursive: true,
});

function buildDirTree(dirs) {
  const tree = {};

  dirs.forEach(dir => {
    const parts = dir.split(/[/\\]/); // Use `/` or `\\` as a path seperator.

    let current = tree;

    parts.forEach((part, index) => {
      if (!current[part]) {
        current[part] = index === parts.length - 1 ? null : {};
      }
      current = current[part];
    });
  });

  return tree;
}

function renderDirTree(tree, basePath = '') {
  return (
    <ul>
      {Object.keys(tree).map(key => {
        const path = `${basePath}/${key}`;

        if (tree[key] === null) {
          return (
            <li key={path}>
              <Link href={`/docs${path.replace('.md', '')}`}>
                {key.replace('.md', '')}
              </Link>
            </li>
          );
        } else {
          return (
            <li key={path}>
              <span>{key}</span>
              {renderDirTree(tree[key], path)}
            </li>
          );
        }
      })}
    </ul>
  );
}
