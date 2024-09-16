import styles from './Aside.module.scss';

export default function Aside({ children }) {
  return <aside className={styles.aside}>{children}</aside>;
}
