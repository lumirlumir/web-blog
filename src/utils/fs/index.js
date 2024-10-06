// @ts-check
import { promises as fs } from 'fs';

import matter from 'gray-matter';

/**
 * @typedef {import('fs').ObjectEncodingOptions} ObjectEncodingOptions
 */

/**
 * Asynchronously reads the contents of a file.
 *
 * @async
 * @param {string} filePath The path to the file.
 * @returns {Promise<string>} The content of the file.
 */
export async function readFile(filePath) {
  return fs.readFile(filePath, 'utf-8');
}

/**
 * Asynchronously reads a Markdown file and returns either the content or data(front matter).
 *
 * @async
 * @param {string} filePath The path to the Markdown file.
 * @param {'content' | 'data'} [option='content'] The type of data to return.
 * @returns {Promise<string | {[key: string]: any}>} The content or data(front matter) of the file.
 * @throws {TypeError} If the option is invalid.
 */
export async function readFileForMarkdown(filePath, option = 'content') {
  const { content, data } = matter(await readFile(filePath));

  switch (option) {
    case 'content':
      return content;
    case 'data':
      return data;
    default:
      throw TypeError();
  }
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
