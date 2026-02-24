'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './SectionPage.module.scss';

interface SectionPageProps {
  children: React.ReactNode;
  isActive: boolean;
  direction: 'forward' | 'backward';
  index: number;
}

const SectionPage: React.FC<SectionPageProps> = ({ 
  children, 
  isActive, 
  direction,
  index 
}) => {
  const variants = {
    enter: (direction: 'forward' | 'backward') => ({
      rotateY: direction === 'forward' ? 90 : -90,
      opacity: 0,
      transformOrigin: direction === 'forward' ? 'left center' : 'right center',
      zIndex: 1,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      zIndex: 2,
      transition: {
        duration: 0.7,
        ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
      },
    },
    exit: (direction: 'forward' | 'backward') => ({
      rotateY: direction === 'forward' ? -90 : 90,
      opacity: 0,
      transformOrigin: direction === 'forward' ? 'right center' : 'left center',
      zIndex: 0,
      transition: {
        duration: 0.7,
        ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
      },
    }),
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate={isActive ? 'center' : 'exit'}
      exit="exit"
      className={styles.sectionPage}
      style={{
        position: isActive ? 'relative' : 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }}
    >
      <div className={styles.pageInner}>
        {children}
      </div>
      
      {/* Page number */}
      <div className={styles.pageNumber}>
        {index + 1}
      </div>
    </motion.div>
  );
};

export default SectionPage;
