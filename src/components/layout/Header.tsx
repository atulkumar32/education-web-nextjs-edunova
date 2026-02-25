'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppSelector } from '@/store/hooks';
import Button from '@/components/ui/Button';
import Logo from '@/components/common/Logo';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const cartItems = useAppSelector((state) => state.cart.items);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/courses', label: 'Courses' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <Logo size="md" />
        </Link>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="/cart" className={styles.cartButton}>
            🛒
            {cartItemCount > 0 && <span className={styles.cartBadge}>{cartItemCount}</span>}
          </Link>

          {isAuthenticated ? (
            <Button size="sm" variant="outline">
              Profile
            </Button>
          ) : (
            <Link href="/auth/login">
              <Button size="sm">Login</Button>
            </Link>
          )}

          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <nav className={styles.mobileNav}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.mobileNavLink} ${
                    pathname === link.href ? styles.active : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className={styles.mobileActions}>
              {!isAuthenticated && (
                <>
                  <Link href="/auth/login">
                    <Button fullWidth>Login</Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button fullWidth variant="outline">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
