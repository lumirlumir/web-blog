import Categories from '@/components/aside/Categories';
import Home from '@/components/aside/Home';

import styles from './Aside.module.scss';

export default async function Aside() {
  return (
    <aside className={styles.aside}>
      <Home />
      <Categories />
    </aside>
  );
}
