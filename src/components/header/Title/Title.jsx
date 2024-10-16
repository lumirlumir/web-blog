import Link from 'next/link';

import { GITHUB_USER_NAME, GITHUB_USER_HTML_URL } from '@/constants';

export default function Title() {
  return <Link href={GITHUB_USER_HTML_URL}>{GITHUB_USER_NAME}</Link>;
}
