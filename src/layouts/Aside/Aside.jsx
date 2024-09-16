import Link from 'next/link';

import Categories from '@/components/aside/Categories';

import styles from './Aside.module.scss';

export default async function Aside() {
  return (
    <aside className={styles.aside}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
      <Categories />
    </aside>
  );
}
