// @ts-check
import { promises as fs } from 'fs';
import { basename } from 'path';

import matter from 'gray-matter';

/**
 * @typedef {import('fs').ObjectEncodingOptions} ObjectEncodingOptions
 * @typedef {import('@/types').MarkdownDocument} MarkdownDocument
 */

/**
 * Asynchronously reads a Markdown file and returns `MarkdownDocument` type object.
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
 * Asynchronously reads a directory and returns a list of file paths with the specified extension.
 *
 * @async
 * @param {string} dirPath The path to the directory.
 * @param {string} extension The file extension to filter by. `extension` cannot be a RegExp. It must be a string.
 * @param {ObjectEncodingOptions & {withFileTypes?: false | undefined; recursive?: boolean | undefined;}} [options = { recursive: true }] Optional `readdir` options.
 * @returns {Promise<string[]>} An array of file paths.
 */
export async function readDirByExtension(
  dirPath,
  extension,
  options = { recursive: true },
) {
  const filePaths = await fs.readdir(dirPath, options);

  return filePaths.filter(filePath => filePath.endsWith(extension));
}
