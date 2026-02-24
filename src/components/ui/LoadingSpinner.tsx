'use client';

import React from 'react';
import styles from './LoadingSpinner.module.scss';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', fullScreen = false }) => {
  if (fullScreen) {
    return (
      <div className={styles.fullScreen}>
        <div className={`${styles.spinner} ${styles[size]}`}></div>
      </div>
    );
  }

  return <div className={`${styles.spinner} ${styles[size]}`}></div>;
};

export default LoadingSpinner;
