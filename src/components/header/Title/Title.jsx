import Image from 'next/image';
import Link from 'next/link';

import { getGithubUsers } from '@/utils/fetch';

import styles from './Title.module.scss';

export default async function Title() {
  const { avatar_url, bio, name } = await getGithubUsers();

  return (
    <div className={styles.title}>
      <Image
        src={avatar_url}
        width={36}
        height={36}
        alt={`${name}'s GitHub profile image`}
      />
      <div>
        <div className={styles['user-name']}>
          <Link href="/">{name}</Link>
        </div>
        <div className={styles['user-bio']}>{bio}</div>
      </div>
    </div>
  );
}
