import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

/**
 * Custom hook to track scroll position
 * @returns Current scroll position {x, y}
 */
export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    // Set initial position
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}

/**
 * Hook to detect if user has scrolled past a certain point
 * @param threshold - Scroll Y position threshold
 * @returns boolean indicating if scrolled past threshold
 */
export function useScrollPast(threshold: number = 100): boolean {
  const { y } = useScrollPosition();
  return y > threshold;
}
