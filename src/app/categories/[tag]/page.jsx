import Link from 'next/link';

import { Fragment, Suspense } from 'react';
import { FaBook, FaTag, FaRegCalendarPlus, FaRegCalendarXmark } from 'react-icons/fa6';

import { DOCS, EXTENSION } from '@/constants/path';
import { compareMarkdownDocument } from '@/utils/compare';
import { readMarkdownTagTree } from '@/utils/fs';
import { markdownToText } from '@/utils/markup';

const { mdRegExp } = EXTENSION;

export default async function Page({ params, searchParams }) {
  const { sort = 'updated', order = 'desc' } = searchParams;

  const tagTree = await readMarkdownTagTree(DOCS);

  return (
    <Suspense key={sort + order} fallback={<span>loading...</span>}>
      {tagTree[params.tag]
        .sort(compareMarkdownDocument(sort, order))
        .map(({ basename, data: { title, description, created, updated, tags } }) => (
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
        ))}
    </Suspense>
  );
}
