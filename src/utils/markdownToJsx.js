import { promises as fs } from 'fs';

import parse from 'html-react-parser';

import { REPOSITORY } from '@/constants/github';

/**
 * Converts a markdown file to JSX.
 *
 * @async
 * @param {string} filePath Path to the markdown file.
 * @returns {Promise<JSX.Element>} A promise that resolves to JSX.
 */
export default async function markdownToJsx(filePath) {
  const markdown = await readMarkdown(filePath);
  const html = await markdownToHtml(markdown);
  const jsx = htmlToJsx(html);

  return jsx;
}

/**
 * Reads a markdown file.
 *
 * @async
 * @param {string} filePath Path to the markdown file.
 * @returns {Promise<string>} A promise that resolves to the markdown content.
 */
export async function readMarkdown(filePath) {
  return await fs.readFile(filePath, 'utf-8');
}

/**
 * Converts markdown text to HTML using GitHub's Markdown API.
 *
 * @async
 * @param {string} markdown The markdown content.
 * @returns {Promise<string>} A promise that resolves to HTML.
 */
export async function markdownToHtml(markdown) {
  const response = await fetch('https://api.github.com/markdown', {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify({
      text: markdown,
      mode: 'gfm',
      context: REPOSITORY.fullName,
    }),
  });

  return response.text();
}

/**
 * Converts HTML to JSX.
 *
 * @param {string} html The HTML content.
 * @returns {JSX.Element} The JSX representation.
 */
export function htmlToJsx(html) {
  return parse(html, {
    replace: ({ name, attribs }) => {
      // img-attribute-src
      if (name === 'img' && attribs.src.startsWith('/public')) {
        attribs.src = attribs.src.replace(/^\/public/, '');
      }
    },
  });
}
