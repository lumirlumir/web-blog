import Link from 'next/link';
import { FaHouseChimney, FaGithub } from 'react-icons/fa6';

import { getGithubUsers } from '@/utils/fetch';

import styles from './Links.module.scss';

export default async function Links() {
  const { html_url } = await getGithubUsers();

  return (
    <ul className={styles.links}>
      <li>
        <Link href="/">
          <FaHouseChimney />
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link href={html_url}>
          <FaGithub />
          <span>GitHub</span>
        </Link>
      </li>
    </ul>
  );
}
