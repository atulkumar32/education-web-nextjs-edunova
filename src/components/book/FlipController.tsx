'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SectionPage from './SectionPage';
import PageIndicator from './PageIndicator';
import styles from './FlipController.module.scss';

interface FlipControllerProps {
  sections: React.ReactNode[];
  enableSwipe?: boolean;
}

const FlipController: React.FC<FlipControllerProps> = ({ 
  sections, 
  enableSwipe = true 
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const totalPages = sections.length;
  const minSwipeDistance = 50;

  const goToNextPage = () => {
    if (currentPage < totalPages - 1 && !isAnimating) {
      setIsAnimating(true);
      setDirection('forward');
      setCurrentPage(currentPage + 1);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0 && !isAnimating) {
      setIsAnimating(true);
      setDirection('backward');
      setCurrentPage(currentPage - 1);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  const goToPage = (pageIndex: number) => {
    if (pageIndex !== currentPage && !isAnimating && pageIndex >= 0 && pageIndex < totalPages) {
      setIsAnimating(true);
      setDirection(pageIndex > currentPage ? 'forward' : 'backward');
      setCurrentPage(pageIndex);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    if (!enableSwipe) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!enableSwipe) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!enableSwipe || !touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNextPage();
    } else if (isRightSwipe) {
      goToPreviousPage();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        goToNextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goToPreviousPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isAnimating]);

  return (
    <div 
      className={styles.flipController}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className={styles.pagesContainer}>
        <AnimatePresence mode="wait">
          {sections.map((section, index) => (
            <SectionPage
              key={index}
              isActive={index === currentPage}
              direction={direction}
              index={index}
            >
              {section}
            </SectionPage>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      {currentPage > 0 && (
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={goToPreviousPage}
          disabled={isAnimating}
          aria-label="Previous page"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {currentPage < totalPages - 1 && (
        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={goToNextPage}
          disabled={isAnimating}
          aria-label="Next page"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Page indicator */}
      <PageIndicator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageClick={goToPage}
      />
    </div>
  );
};

export default FlipController;
