import Image from 'next/image';
import Link from 'next/link';

import { getGithubUsers } from '@/utils/fetch';

import styles from './Profile.module.scss';

export default async function Profile() {
  const { avatar_url, bio, name } = await getGithubUsers();

  return (
    <div className={styles.profile}>
      <Image
        src={avatar_url}
        width={96}
        height={96}
        alt={`${name}'s GitHub profile image`}
      />
      <div className={styles['user-name']}>
        <Link href="/">{name}</Link>
      </div>
      <div className={styles['user-bio']}>{bio}</div>
    </div>
  );
}
