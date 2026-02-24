import { useState, useCallback } from 'react';

/**
 * Custom hook for toggling boolean state
 * @param initialValue - Initial boolean value (default: false)
 * @returns [value, toggle, setTrue, setFalse]
 */
export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return [value, toggle, setTrue, setFalse] as const;
}
