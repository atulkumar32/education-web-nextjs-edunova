'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './BookLayout.module.scss';

interface BookLayoutProps {
  children: React.ReactNode;
}

const BookLayout: React.FC<BookLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    // After first render, enable animations
    setIsFirstRender(false);
  }, []);

  // Page flip animation for route changes
  const pageFlipVariants = {
    initial: (direction: 'forward' | 'backward') => ({
      rotateY: direction === 'forward' ? 90 : -90,
      opacity: 0,
      transformOrigin: direction === 'forward' ? 'left center' : 'right center',
    }),
    animate: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
      },
    },
    exit: (direction: 'forward' | 'backward') => ({
      rotateY: direction === 'forward' ? -90 : 90,
      opacity: 0,
      transformOrigin: direction === 'forward' ? 'right center' : 'left center',
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
      },
    }),
  };

  return (
    <div className={styles.bookContainer}>
      <div className={styles.bookPerspective}>
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={pathname}
            custom={direction}
            variants={pageFlipVariants}
            initial={isFirstRender ? false : "initial"}
            animate="animate"
            exit="exit"
            className={styles.bookPage}
          >
            <div className={styles.pageContent}>
              {children}
            </div>
            
            {/* Page shadow effect */}
            <div className={styles.pageShadow} />
            
            {/* Page edge effect */}
            <div className={styles.pageEdge} />
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Book spine (visible on desktop) */}
      <div className={styles.bookSpine} />
    </div>
  );
};

export default BookLayout;
