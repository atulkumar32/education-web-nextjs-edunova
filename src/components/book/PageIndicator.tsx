'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './PageIndicator.module.scss';

interface PageIndicatorProps {
  currentPage: number;
  totalPages: number;
  onPageClick: (pageIndex: number) => void;
}

const PageIndicator: React.FC<PageIndicatorProps> = ({ 
  currentPage, 
  totalPages, 
  onPageClick 
}) => {
  return (
    <div className={styles.pageIndicator}>
      <div className={styles.dots}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentPage ? styles.active : ''}`}
            onClick={() => onPageClick(index)}
            aria-label={`Go to page ${index + 1}`}
          >
            {index === currentPage && (
              <motion.div
                className={styles.activeDot}
                layoutId="activeDot"
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}
          </button>
        ))}
      </div>
      
      <div className={styles.pageCount}>
        <span className={styles.current}>{currentPage + 1}</span>
        <span className={styles.separator}>/</span>
        <span className={styles.total}>{totalPages}</span>
      </div>
    </div>
  );
};

export default PageIndicator;
