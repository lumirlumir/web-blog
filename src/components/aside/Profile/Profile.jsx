import Image from 'next/image';
import Link from 'next/link';

import { GITHUB_USER_LOGIN } from '@/constants';

import styles from './Profile.module.scss';

export default async function Profile() {
  const response = await fetch(`https://api.github.com/users/${GITHUB_USER_LOGIN}`);
  const { avatar_url, bio, name } = await response.json();

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
