import { promises as fs } from 'fs';
import parse from 'html-react-parser';

import { REPOSITORY } from '@/constants/github';
import { DOCS } from '@/constants/path';
import Article from '@/components/layouts/Article';

export async function generateStaticParams() {
  const paths = await fs.readdir(DOCS, {
    encoding: 'utf-8',
    recursive: true,
  });

  return paths
    .filter(path => path.endsWith('.md'))
    .map(path => ({
      categories: path.replace(/\\/g, '/').replace('.md', '').split('/'),
    }));
}

export default async function Page({ params }) {
  const markdown = await fs.readFile(
    `${DOCS}/${params.categories.join('/')}.md`,
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
