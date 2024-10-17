import Link from 'next/link';

import { Fragment } from 'react';
import { FaBook, FaTag, FaRegCalendarPlus, FaRegCalendarXmark } from 'react-icons/fa6';

import { PATH_DOCS, EXT_MD_REGEXP } from '@/constants';
import { compareMarkdownDocument } from '@/utils/compare';
import { readMarkdownTagTree } from '@/utils/fs';
import { markdownToJsx } from '@/utils/markup';

/* Next.js Declaration */
// Control what happens when a dynamic segment is visited that was not generated with `generateStaticParams`.
export const dynamicParams = false;

export async function generateStaticParams() {
  const tagTree = await readMarkdownTagTree(PATH_DOCS);
  const tags = Object.keys(tagTree);

  return tags.map(tag => ({ tag }));
}

export default async function Page({ params, searchParams }) {
  const { sort = 'updated', order = 'desc' } = searchParams;
  const tagTree = await readMarkdownTagTree(PATH_DOCS);

  return tagTree[params.tag]
    .sort(compareMarkdownDocument(sort, order))
    .map(({ basename, data: { title, description, created, updated, tags } }) => (
      <div key={basename}>
        <h2>
          <Link href={`/posts/${basename.replace(EXT_MD_REGEXP, '')}`}>
            {markdownToJsx(title)}
          </Link>
        </h2>
        <p>
          <FaBook />
          {markdownToJsx(description)}
        </p>
        <p>
          {tags.map(tag => (
            <Fragment key={tag}>
              <FaTag />
              <span>{tag}</span>
              &ensp;
            </Fragment>
          ))}
        </p>
        <p>
          <span>
            <FaRegCalendarPlus />
            <sup>created</sup>
            {created}
            &ensp;
          </span>
          <span>
            <FaRegCalendarXmark />
            <sup>updated</sup>
            {updated}
          </span>
        </p>
        <hr />
      </div>
    ));
}
