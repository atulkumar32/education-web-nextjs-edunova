import { useState, useCallback, useEffect } from 'react';

interface UseBookNavigationProps {
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export function useBookNavigation({ totalPages, onPageChange }: UseBookNavigationProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPage = useCallback((pageIndex: number) => {
    if (pageIndex === currentPage || isAnimating || pageIndex < 0 || pageIndex >= totalPages) {
      return;
    }

    setIsAnimating(true);
    setDirection(pageIndex > currentPage ? 'forward' : 'backward');
    setCurrentPage(pageIndex);
    
    if (onPageChange) {
      onPageChange(pageIndex);
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  }, [currentPage, isAnimating, totalPages, onPageChange]);

  const nextPage = useCallback(() => {
    if (currentPage < totalPages - 1) {
      goToPage(currentPage + 1);
    }
  }, [currentPage, totalPages, goToPage]);

  const previousPage = useCallback(() => {
    if (currentPage > 0) {
      goToPage(currentPage - 1);
    }
  }, [currentPage, goToPage]);

  const canGoNext = currentPage < totalPages - 1;
  const canGoPrevious = currentPage > 0;

  return {
    currentPage,
    direction,
    isAnimating,
    goToPage,
    nextPage,
    previousPage,
    canGoNext,
    canGoPrevious,
  };
}
