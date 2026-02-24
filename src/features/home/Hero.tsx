'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/common/Container';
import FloatingBlob from '@/components/animations/FloatingBlob';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <FloatingBlob color="rgba(99, 102, 241, 0.4)" size={400} top="10%" left="5%" delay={0} />
      <FloatingBlob color="rgba(236, 72, 153, 0.4)" size={350} top="60%" left="70%" delay={2} />
      <FloatingBlob color="rgba(245, 158, 11, 0.4)" size={300} top="30%" left="80%" delay={4} />

      <Container>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.title}>
              Transform Your Future with <span className="text-gradient">Online Learning</span>
            </h1>
            <p className={styles.subtitle}>
              Master in-demand skills with expert-led courses. Join over 50,000 students learning
              web development, data science, design, and more.
            </p>
            <div className={styles.actions}>
              <Link href="/courses">
                <Button size="lg">Explore Courses</Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className={styles.stats}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={styles.stat}>
              <div className={styles.statNumber}>50K+</div>
              <div className={styles.statLabel}>Students</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Courses</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Instructors</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>4.8★</div>
              <div className={styles.statLabel}>Rating</div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
