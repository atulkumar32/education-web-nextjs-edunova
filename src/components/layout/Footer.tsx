'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.logo}>EduNova</div>
            <p>
              Empowering learners worldwide with high-quality online education. Transform your
              career with our expert-led courses.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink}>
                𝕏
              </a>
              <a href="#" className={styles.socialLink}>
                in
              </a>
              <a href="#" className={styles.socialLink}>
                f
              </a>
              <a href="#" className={styles.socialLink}>
                ▶
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h3>Company</h3>
            <div className={styles.links}>
              <Link href="/about" className={styles.link}>
                About Us
              </Link>
              <Link href="/courses" className={styles.link}>
                Courses
              </Link>
              <Link href="/blog" className={styles.link}>
                Blog
              </Link>
              <Link href="/contact" className={styles.link}>
                Contact
              </Link>
            </div>
          </div>

          <div className={styles.column}>
            <h3>Support</h3>
            <div className={styles.links}>
              <Link href="#" className={styles.link}>
                Help Center
              </Link>
              <Link href="#" className={styles.link}>
                Terms of Service
              </Link>
              <Link href="#" className={styles.link}>
                Privacy Policy
              </Link>
              <Link href="#" className={styles.link}>
                FAQ
              </Link>
            </div>
          </div>

          <div className={styles.column}>
            <h3>Categories</h3>
            <div className={styles.links}>
              <Link href="/courses?category=web-development" className={styles.link}>
                Web Development
              </Link>
              <Link href="/courses?category=data-science" className={styles.link}>
                Data Science
              </Link>
              <Link href="/courses?category=design" className={styles.link}>
                Design
              </Link>
              <Link href="/courses?category=marketing" className={styles.link}>
                Marketing
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} EduNova. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="#" className={styles.link}>
              Privacy
            </Link>
            <Link href="#" className={styles.link}>
              Terms
            </Link>
            <Link href="#" className={styles.link}>
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
