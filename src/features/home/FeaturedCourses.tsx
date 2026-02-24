'use client';

import React from 'react';
import Link from 'next/link';
import Container from '@/components/common/Container';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import styles from './FeaturedCourses.module.scss';
import coursesData from '@/data/courses.json';

const FeaturedCourses: React.FC = () => {
  const featuredCourses = coursesData.filter((course) => course.featured).slice(0, 3);

  return (
    <section className={styles.section}>
      <Container>
        <ScrollReveal>
          <div className={styles.header}>
            <h2 className={styles.title}>Featured Courses</h2>
            <p className={styles.subtitle}>
              Discover our most popular courses taught by industry experts
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {featuredCourses.map((course, index) => (
            <ScrollReveal key={course.id} delay={index * 0.1}>
              <Link href={`/courses/${course.slug}`} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <div className={styles.imagePlaceholder}>📚</div>
                  {course.bestseller && (
                    <Badge variant="warning" size="sm">
                      Bestseller
                    </Badge>
                  )}
                </div>

                <div className={styles.content}>
                  <div className={styles.meta}>
                    <Badge variant="primary" size="sm">
                      {course.category}
                    </Badge>
                    <span className={styles.level}>{course.level}</span>
                  </div>

                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <p className={styles.description}>{course.description}</p>

                  <div className={styles.instructor}>
                    <div className={styles.instructorAvatar}>👤</div>
                    <span>{course.instructor.name}</span>
                  </div>

                  <div className={styles.footer}>
                    <div className={styles.rating}>
                      <span className={styles.stars}>⭐ {course.rating}</span>
                      <span className={styles.reviews}>({course.reviews.toLocaleString()})</span>
                    </div>
                    <div className={styles.price}>
                      <span className={styles.currentPrice}>${course.price}</span>
                      <span className={styles.originalPrice}>${course.originalPrice}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className={styles.viewAll}>
            <Link href="/courses">
              <Button size="lg">View All Courses</Button>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default FeaturedCourses;
