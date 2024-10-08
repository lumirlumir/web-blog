import { readMarkdownFilesFromDir } from '@/utils/fs';

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
  const markdownDocuments = await readMarkdownFilesFromDir(dirPath);

  for (const markdownDocument of markdownDocuments) {
    const {
      data: { tags },
    } = markdownDocument;

    tags.forEach(tag => {
      tagTree[tag] ??= [];
      tagTree[tag].push(markdownDocument);
    });
  }

  return tagTree;
}
