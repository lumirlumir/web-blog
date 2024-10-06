import parse from 'html-react-parser';

import { REPOSITORY } from '@/constants/github';
import { readMarkdown } from './fs';

/**
 * Converts a markdown content to JSX.
 *
 * @async
 * @param {string} filePath Path to the markdown file.
 * @returns {Promise<JSX.Element>} A promise that resolves to JSX.
 */
export default async function markdownToJsx(filePath) {
  const { title } = await readMarkdown(filePath, 'data');
  const markdownContent = writeTitleIntoMarkdown(
    title,
    await readMarkdown(filePath, 'content'),
  );

  const html = await markdownToHtml(markdownContent);
  const jsx = htmlToJsx(html);

  return jsx;
}

/**
 * Adds a title as a top-level heading to the given markdown content.
 *
 * @param {string} title The title to add as a heading.
 * @param {string} markdownContent The markdown content.
 * @returns {string} The markdown content with the title as a heading, if provided.
 */
export function writeTitleIntoMarkdown(title, markdownContent) {
  return `${title ? `# ${title}\n\n` : ''}${markdownContent}`;
}

/**
 * Converts markdown content to HTML using GitHub's Markdown API.
 *
 * @async
 * @param {string} markdownContent The markdown content.
 * @returns {Promise<string>} A promise that resolves to HTML.
 */
export async function markdownToHtml(markdownContent) {
  const response = await fetch('https://api.github.com/markdown', {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify({
      text: markdownContent,
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
    replace({ name, attribs }) {
      // <img>
      if (name === 'img') {
        attribs.src = attribs.src.startsWith('/public')
          ? attribs.src.replace(/^\/public/, '')
          : attribs.src;
        attribs.loading = 'lazy';
      }
    },
  });
}
