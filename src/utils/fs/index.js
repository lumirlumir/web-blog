import { promises as fs } from 'fs';
import { basename, join } from 'path';

import matter from 'gray-matter';

import { EXTENSION } from '@/constants/path';

const { md } = EXTENSION;

/**
 * @typedef {import('@/types').MarkdownDocument} MarkdownDocument
 */

/**
 * Asynchronously reads a Markdown file and returns a `MarkdownDocument` type object.
 *
 * @async
 * @param {string} pathToMarkdownFile Path to a Markdown file.
 * @returns {Promise<MarkdownDocument>} A promise that resolves to a `MarkdownDocument` type object.
 * @see {@link MarkdownDocument}
 */
export async function readMarkdownFile(pathToMarkdownFile) {
  const { content, data } = matter(await fs.readFile(pathToMarkdownFile, 'utf-8'));

  return {
    basename: basename(pathToMarkdownFile),
    content,
    data,
  };
}

/**
 * Asynchronously reads a directory and returns a list(array) of `MarkdownDocument` type object.
 *
 * @async
 * @param {string} dirPath Path to a directory.
 * @returns {Promise<MarkdownDocument[]>} A promise that resolves to a list(array) of `MarkdownDocument` type object.
 * @see {@link MarkdownDocument}
 */
export async function readMarkdownFilesFromDir(dirPath) {
  const markdownDocuments = [];
  const markdownFilePaths = (await fs.readdir(dirPath)).filter(filePath =>
    filePath.endsWith(md),
  );

  for (const markdownFilePath of markdownFilePaths) {
    const markdownDocument = await readMarkdownFile(join(dirPath, markdownFilePath));
    markdownDocuments.push(markdownDocument);
  }

  return markdownDocuments;
}
