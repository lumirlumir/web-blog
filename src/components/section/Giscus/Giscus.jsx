'use client';

import GiscusOriginal from '@giscus/react';

import { GITHUB_REPO_FULL_NAME } from '@/constants';

export default function Giscus() {
  return (
    <GiscusOriginal
      repo={GITHUB_REPO_FULL_NAME}
      repoId="R_kgDOLa_QgA"
      category="comments"
      categoryId="DIC_kwDOLa_QgM4ChivI"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="ko"
      loading="lazy"
    />
  );
}
