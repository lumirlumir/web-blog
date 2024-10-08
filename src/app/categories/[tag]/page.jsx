import Link from 'next/link';

import { Fragment } from 'react';
import { FaBook, FaTag, FaRegCalendarPlus, FaRegCalendarXmark } from 'react-icons/fa6';

import { DOCS, EXTENSION } from '@/constants/path';
import { readMarkdownTagTree } from '@/utils/fs';
import { markdownToText } from '@/utils/markup';

const { mdRegExp } = EXTENSION;

export default async function Page({ params }) {
  const tagTree = await readMarkdownTagTree(DOCS);

  return tagTree[params.tag].map(
    ({
      basename,
      data: {
        title,
        description,
        tags,
        date: { created, updated },
      },
    }) => (
      <div key={basename}>
        <h2>
          <Link href={`/posts/${basename.replace(mdRegExp, '')}`}>
            {markdownToText(title)}
          </Link>
        </h2>
        <p>
          <FaBook />
          {markdownToText(description)}
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
    ),
  );
}
