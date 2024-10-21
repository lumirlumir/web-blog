'use client';

import React, { useState } from 'react';

import styles from './DarkModeToggle.module.scss';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const onClick = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={styles['dark-mode-toggle']}>
      <button
        className={`${styles['mode-switcher']} ${isDarkMode ? '' : styles.active}`}
        onClick={onClick}
      >
        <span className={styles['mode-switcher-main-body']}></span>
        <span className={styles['mode-switcher-shadow-shape']}></span>
        <span
          className={`${styles['mode-switcher-sunray']} ${styles['mode-switcher-sunray-sunray-1']}`}
        ></span>
        <span
          className={`${styles['mode-switcher-sunray']} ${styles['mode-switcher-sunray-sunray-2']}`}
        ></span>
        <span
          className={`${styles['mode-switcher-sunray']} ${styles['mode-switcher-sunray-sunray-3']}`}
        ></span>
        <span
          className={`${styles['mode-switcher-sunray']} ${styles['mode-switcher-sunray-sunray-4']}`}
        ></span>
      </button>
    </div>
  );
}
