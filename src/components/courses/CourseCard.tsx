'use client';

import React from 'react';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { useAppDispatch } from '@/store/hooks';
import { addToCart } from '@/store/cartSlice';
import styles from './CourseCard.module.scss';

interface Course {
  id: number;
  slug: string;
  title: string;
  description: string;
  instructor: {
    name: string;
  };
  price: number;
  originalPrice: number;
  category: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  reviews: number;
  image: string;
  bestseller?: boolean;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
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
    <div className={styles.card}>
      <Link href={`/courses/${course.slug}`} className={styles.link}>
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

          <h3 className={styles.title}>{course.title}</h3>
          <p className={styles.description}>{course.description}</p>

          <div className={styles.instructor}>
            <div className={styles.instructorAvatar}>👤</div>
            <span>{course.instructor.name}</span>
          </div>

          <div className={styles.stats}>
            <span>⏱ {course.duration}</span>
            <span>👥 {course.students.toLocaleString()}</span>
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

      <div className={styles.actions}>
        <Button fullWidth onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
