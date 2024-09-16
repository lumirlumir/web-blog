import { USER } from '@/constants/github';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <a href={USER.htmlUrl}>{USER.name}</a>
    </header>
  );
}
