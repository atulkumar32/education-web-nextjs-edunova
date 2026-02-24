'use client';

import React, { useState, useMemo } from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import CourseCard from '@/components/courses/CourseCard';
import SearchBar from '@/components/courses/SearchBar';
import FilterSidebar from '@/components/courses/FilterSidebar';
import styles from './page.module.scss';
import coursesData from '@/data/courses.json';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const filteredCourses = useMemo(() => {
    let filtered = [...coursesData];

    if (searchQuery) {
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((course) => course.category === selectedCategory);
    }

    if (selectedLevel !== 'all') {
      filtered = filtered.filter((course) => course.level === selectedLevel);
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'popular':
        default:
          return b.students - a.students;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedLevel, sortBy]);

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <ScrollReveal>
            <h1 className={styles.title}>Explore Our Courses</h1>
            <p className={styles.subtitle}>
              Discover {coursesData.length}+ courses to transform your career
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className={styles.content}>
        <FilterSidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
        />

        <div className={styles.main}>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
            resultCount={filteredCourses.length}
          />

          <div className={styles.grid}>
            {filteredCourses.map((course, index) => (
              <ScrollReveal key={course.id} delay={index * 0.05}>
                <CourseCard course={course} />
              </ScrollReveal>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className={styles.noResults}>
              <p>No courses found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
