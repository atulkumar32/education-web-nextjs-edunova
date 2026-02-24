'use client';

import React from 'react';
import styles from './Badge.module.scss';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', size = 'md' }) => {
  return <span className={`${styles.badge} ${styles[variant]} ${styles[size]}`}>{children}</span>;
};

export default Badge;
