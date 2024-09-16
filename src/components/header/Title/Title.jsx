import Link from 'next/link';

import { USER } from '@/constants/github';

export default function Title() {
  return <Link href={USER.htmlUrl}>{USER.name}</Link>;
}
