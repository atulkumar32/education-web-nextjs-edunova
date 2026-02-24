'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/common/Container';
import ScrollReveal from '@/components/animations/ScrollReveal';
import styles from './Testimonials.module.scss';
import testimonialsData from '@/data/testimonials.json';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className={styles.section}>
      <Container>
        <ScrollReveal>
          <div className={styles.header}>
            <h2 className={styles.title}>What Our Students Say</h2>
            <p className={styles.subtitle}>Join thousands of successful learners</p>
          </div>
        </ScrollReveal>

        <div className={styles.testimonialWrapper}>
          <button className={styles.navButton} onClick={prevTestimonial}>
            ‹
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className={styles.testimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.stars}>
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className={styles.content}>{currentTestimonial.content}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>👤</div>
                <div>
                  <div className={styles.name}>{currentTestimonial.name}</div>
                  <div className={styles.role}>{currentTestimonial.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button className={styles.navButton} onClick={nextTestimonial}>
            ›
          </button>
        </div>

        <div className={styles.dots}>
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
