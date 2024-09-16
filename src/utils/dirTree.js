import { promises as fs } from 'fs';
import { join } from 'path';

/**
 * @typedef {object} DirTreeNode
 *
 * @property {string} name The name of the node.
 * @property {Array<DirTreeNode>} [children] The array of child nodes if the node is a directory. This is a recursive structure.
 */

/**
 * Asynchronously retrieves the directory tree structure.
 *
 * @async
 * @param {string} dirPath The path of the directory.
 * @returns {Promise<Array<DirTreeNode>>} A promise that resolves to an array of `DirTreeNode`.
 *
 * @example
 * // Get the directory tree structure
 * const dirTree = await getDirTree('/path/to/dir');
 * console.log(dirTree);
 */
export async function getDirTree(dirPath) {
  // `readdir` automatically throws an error when `dirPath` is not a directory.
  const dirents = await fs.readdir(dirPath, { withFileTypes: true });

  return await Promise.all(
    dirents.map(async dirent => ({
      name: dirent.name,
      ...(dirent.isDirectory()
        ? { children: await getDirTree(join(dirPath, dirent.name)) }
        : {}),
    })),
  );
}

/**
 * Checks if a `DirTreeNode` is a directory.
 *
 * @param {DirTreeNode} dirTreeNode The `DirTreeNode` object.
 * @returns {boolean} `true` if the node is a directory. otherwise, `false`.
 *
 * @example
 * // Check if a node is a directory
 * const isDir = isDirectory({ name: 'folder', children: [...] });
 * console.log(isDir); // true
 */
export function isDirectory(dirTreeNode) {
  return Boolean(dirTreeNode.children);
}
