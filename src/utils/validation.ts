/**
 * Validate email address
 * @param email - Email to validate
 * @returns true if valid, false otherwise
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate password strength
 * @param password - Password to validate
 * @returns true if valid, false otherwise
 */
export function isValidPassword(password: string): boolean {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}

/**
 * Validate phone number
 * @param phone - Phone number to validate
 * @returns true if valid, false otherwise
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

/**
 * Validate URL
 * @param url - URL to validate
 * @returns true if valid, false otherwise
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Sanitize string (remove HTML tags)
 * @param str - String to sanitize
 * @returns Sanitized string
 */
export function sanitizeString(str: string): string {
  return str.replace(/<[^>]*>/g, '');
}

/**
 * Validate required field
 * @param value - Value to validate
 * @returns true if not empty, false otherwise
 */
export function isRequired(value: string | number | null | undefined): boolean {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return value !== null && value !== undefined;
}

/**
 * Validate minimum length
 * @param value - Value to validate
 * @param minLength - Minimum length
 * @returns true if meets minimum, false otherwise
 */
export function hasMinLength(value: string, minLength: number): boolean {
  return value.length >= minLength;
}

/**
 * Validate maximum length
 * @param value - Value to validate
 * @param maxLength - Maximum length
 * @returns true if within maximum, false otherwise
 */
export function hasMaxLength(value: string, maxLength: number): boolean {
  return value.length <= maxLength;
}
