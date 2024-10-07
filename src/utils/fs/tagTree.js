import { join } from 'path';

import { EXTENSION } from '@/constants/path';
import { readFileForMarkdown, readDirByExtension } from '@/utils/fs';

const { md } = EXTENSION;

/**
 * @typedef {import('@/types').TagTreeNode} TagTreeNode
 */

/**
 * Reads a directory and generates a tag tree from markdown files.
 *
 * @param {string} dirPath The path to the directory containing markdown files.
 * @returns {Promise<TagTreeNode[]>} A promise that resolves to an array of tag tree nodes.
 */
export async function readTagTree(dirPath) {
  const tagTree = {}; // Initialize an empty object to store the tag tree
  const markdownFilePaths = await readDirByExtension(dirPath, md);

  for (const markdownFilePath of markdownFilePaths) {
    const { content, data } = await readFileForMarkdown(join(dirPath, markdownFilePath));

    data.tags.forEach(tag => {
      tagTree[tag] ??= [];
      tagTree[tag].push({
        basename: markdownFilePath,
        content,
        data,
      });
    });
  }

  return tagTree;
}
