'use client';

import React from 'react';
import styles from './Section.module.scss';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient';
}

const Section: React.FC<SectionProps> = ({ children, className = '', background = 'white' }) => {
  return (
    <section className={`${styles.section} ${styles[background]} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
