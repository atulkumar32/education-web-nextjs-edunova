'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Container from '@/components/common/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';
import { useAppDispatch } from '@/store/hooks';
import { addToCart } from '@/store/cartSlice';
import styles from './page.module.scss';
import coursesData from '@/data/courses.json';

export default function CourseDetailPage() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const course = coursesData.find((c) => c.slug === params.slug);

  if (!course) {
    return (
      <Container>
        <div className={styles.notFound}>Course not found</div>
      </Container>
    );
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: course.id,
        title: course.title,
        price: course.price,
        image: course.image,
      })
    );
  };

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <Badge variant="primary">{course.category}</Badge>
              <h1 className={styles.title}>{course.title}</h1>
              <p className={styles.description}>{course.description}</p>

              <div className={styles.meta}>
                <div className={styles.rating}>
                  <span className={styles.stars}>⭐ {course.rating}</span>
                  <span>({course.reviews.toLocaleString()} reviews)</span>
                </div>
                <span>👥 {course.students.toLocaleString()} students</span>
                <span>⏱ {course.duration}</span>
              </div>

              <div className={styles.instructor}>
                <div className={styles.instructorAvatar}>👤</div>
                <div>
                  <div className={styles.instructorName}>{course.instructor.name}</div>
                  <div className={styles.instructorTitle}>{course.instructor.title}</div>
                </div>
              </div>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.priceCard}>
                <div className={styles.imagePlaceholder}>📚</div>
                <div className={styles.priceInfo}>
                  <div className={styles.currentPrice}>${course.price}</div>
                  <div className={styles.originalPrice}>${course.originalPrice}</div>
                  <div className={styles.discount}>
                    {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% off
                  </div>
                </div>
                <Button fullWidth size="lg" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
                <Button fullWidth size="lg" variant="outline">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className={styles.content}>
          <div className={styles.main}>
            <section className={styles.section}>
              <h2>What You'll Learn</h2>
              <ul className={styles.learnList}>
                {course.whatYouLearn?.map((item, index) => (
                  <li key={index}>✓ {item}</li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Course Curriculum</h2>
              <Accordion>
                {course.curriculum?.map((section, index) => (
                  <AccordionItem key={index} title={section.section} defaultOpen={index === 0}>
                    <ul className={styles.lessonList}>
                      {section.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex}>{lesson}</li>
                      ))}
                    </ul>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            <section className={styles.section}>
              <h2>About the Instructor</h2>
              <div className={styles.instructorCard}>
                <div className={styles.instructorAvatar}>👤</div>
                <div>
                  <h3>{course.instructor.name}</h3>
                  <p className={styles.instructorTitle}>{course.instructor.title}</p>
                  <p>{course.instructor.bio}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
