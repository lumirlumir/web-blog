'use client';

import React, { useContext } from 'react';
import { ThemeContext } from '@/components/common/ThemeProvider';

import styles from './DarkModeToggle.module.scss';

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles['dark-mode-toggle']}>
      {theme && (
        <button
          className={`${styles['mode-switcher']} ${theme === 'dark' ? '' : styles.active}`}
          onClick={toggleTheme}
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
      )}
    </div>
  );
}
