import { promises as fs } from 'fs';
import parse from 'html-react-parser';

import { REPOSITORY } from '@/constants/github';
import Article from '@/layouts/Article';

export default async function Page({ params }) {
  const markdown = await fs.readFile(
    `${process.cwd()}/src/docs/${params.categories.join('/')}.md`,
    'utf-8',
  );

  return <Article>{await markdownToJsx(markdown)}</Article>;
}

async function markdownToHtml(markdown) {
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

function htmlToJsx(html) {
  return parse(html, {
    replace: ({ name, attribs }) => {
      if (name === 'img' && attribs.src.startsWith('/public')) {
        attribs.src = attribs.src.replace(/^\/public/, '');
      }
    },
  });
}

async function markdownToJsx(markdown) {
  return htmlToJsx(await markdownToHtml(markdown));
}
