'use client';

import React, { useState } from 'react';
import Container from '@/components/common/Container';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import styles from './Newsletter.module.scss';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className={styles.section}>
      <Container>
        <ScrollReveal>
          <div className={styles.card}>
            <h2 className={styles.title}>Stay Updated</h2>
            <p className={styles.subtitle}>
              Subscribe to our newsletter and get the latest courses, tips, and exclusive offers
            </p>

            {isSubmitted ? (
              <div className={styles.success}>
                ✓ Thank you for subscribing! Check your email for confirmation.
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  fullWidth
                />
                <Button type="submit" size="lg">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default Newsletter;
