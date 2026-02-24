'use client';

import React from 'react';
import Container from '@/components/common/Container';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Counter from '@/components/animations/Counter';
import styles from './page.module.scss';

export default function AboutPage() {
  const stats = [
    { label: 'Students Enrolled', value: 50000, suffix: '+' },
    { label: 'Expert Instructors', value: 100, suffix: '+' },
    { label: 'Courses Available', value: 500, suffix: '+' },
    { label: 'Countries Reached', value: 120, suffix: '+' },
  ];

  const timeline = [
    { year: '2020', title: 'Founded', description: 'EduNova was born with a mission to democratize education' },
    { year: '2021', title: 'First 10K Students', description: 'Reached our first major milestone' },
    { year: '2022', title: 'Global Expansion', description: 'Expanded to 50+ countries worldwide' },
    { year: '2023', title: 'AI Integration', description: 'Launched personalized learning with AI' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as top online learning platform' },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Container>
          <ScrollReveal>
            <h1 className={styles.title}>About EduNova</h1>
            <p className={styles.subtitle}>
              Empowering learners worldwide to achieve their dreams through quality education
            </p>
          </ScrollReveal>
        </Container>
      </div>

      <Container>
        <section className={styles.section}>
          <ScrollReveal>
            <h2>Our Mission</h2>
            <p className={styles.text}>
              At EduNova, we believe that education is the key to unlocking human potential. Our
              mission is to provide accessible, high-quality online education to learners around the
              world, regardless of their background or location.
            </p>
          </ScrollReveal>
        </section>

        <section className={styles.statsSection}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <ScrollReveal>
            <h2>Our Journey</h2>
          </ScrollReveal>
          <div className={styles.timeline}>
            {timeline.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <div className={styles.timelineContent}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <ScrollReveal>
            <h2>Why Choose EduNova?</h2>
          </ScrollReveal>
          <div className={styles.featuresGrid}>
            {[
              { icon: '🎓', title: 'Expert Instructors', description: 'Learn from industry professionals' },
              { icon: '📱', title: 'Learn Anywhere', description: 'Access courses on any device' },
              { icon: '🏆', title: 'Certificates', description: 'Earn recognized certifications' },
              { icon: '💬', title: 'Community', description: 'Join a global learning community' },
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
