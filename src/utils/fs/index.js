import { promises as fs } from 'fs';

import matter from 'gray-matter';

/**
 * Reads the contents of a file.
 *
 * @async
 * @param {string} filePath The path to the file.
 * @returns {Promise<string>} The content of the file.
 */
export async function readFile(filePath) {
  return fs.readFile(filePath, 'utf-8');
}

/**
 * Reads a Markdown file and returns either the content or data(front matter).
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
