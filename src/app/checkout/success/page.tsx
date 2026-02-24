'use client';

import React from 'react';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Button from '@/components/ui/Button';
import styles from './page.module.scss';

export default function CheckoutSuccessPage() {
  return (
    <div className={styles.page}>
      <Container>
        <div className={styles.card}>
          <div className={styles.icon}>✓</div>
          <h1 className={styles.title}>Order Successful!</h1>
          <p className={styles.description}>Thank you for your purchase. Your courses are now available in your dashboard.</p>
          <div className={styles.actions}>
            <Link href="/courses">
              <Button size="lg">Browse More Courses</Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline">
                Go to Home
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
