import React from 'react';
import styles from './Logo.module.scss';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  return (
    <div className={`${styles.logo} ${styles[size]} ${className}`}>
      <span className={styles.logoPrefix}>the beast</span>
      <span className={styles.logoMain}>EduNova</span>
    </div>
  );
};

export default Logo;
