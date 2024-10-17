import Link from 'next/link';
import { FaHouseChimney, FaGithub } from 'react-icons/fa6';

import { GITHUB_USER_HTML_URL } from '@/constants';

import styles from './Links.module.scss';

export default async function Links() {
  return (
    <ul className={styles.links}>
      <li>
        <Link href="/">
          <FaHouseChimney />
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link href={GITHUB_USER_HTML_URL}>
          <FaGithub />
          <span>GitHub</span>
        </Link>
      </li>
    </ul>
  );
}
