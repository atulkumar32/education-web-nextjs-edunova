'use client';

import React from 'react';
import Link from 'next/link';
import Container from '@/components/common/Container';
import ScrollReveal from '@/components/animations/ScrollReveal';
import styles from './Categories.module.scss';
import categoriesData from '@/data/categories.json';

const Categories: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <ScrollReveal>
          <div className={styles.header}>
            <h2 className={styles.title}>Explore Categories</h2>
            <p className={styles.subtitle}>Find the perfect course for your learning goals</p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {categoriesData.map((category, index) => (
            <ScrollReveal key={category.id} delay={index * 0.05}>
              <Link href={`/courses?category=${category.slug}`} className={styles.card}>
                <div className={styles.icon}>{category.icon}</div>
                <h3 className={styles.name}>{category.name}</h3>
                <p className={styles.description}>{category.description}</p>
                <div className={styles.count}>{category.courseCount} courses</div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
