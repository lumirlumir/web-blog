import Image from 'next/image';

import styles from './Loading.module.scss';

export default function Loading({ content }) {
  return (
    <div className={styles.loading}>
      <div>
        <Image
          src={'/images/loading.gif'}
          width={48}
          height={48}
          alt="GitHub gif loading image"
        />
        <div>{content} 불러오는 중...</div>
      </div>
    </div>
  );
}
