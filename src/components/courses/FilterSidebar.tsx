'use client';

import React from 'react';
import styles from './FilterSidebar.module.scss';
import categoriesData from '@/data/categories.json';

interface FilterSidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedLevel,
  setSelectedLevel,
}) => {
  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.section}>
        <h3 className={styles.title}>Category</h3>
        <div className={styles.options}>
          <button
            className={`${styles.option} ${selectedCategory === 'all' ? styles.active : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Categories
          </button>
          {categoriesData.map((category) => (
            <button
              key={category.id}
              className={`${styles.option} ${
                selectedCategory === category.name ? styles.active : ''
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <span className={styles.icon}>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.title}>Level</h3>
        <div className={styles.options}>
          <button
            className={`${styles.option} ${selectedLevel === 'all' ? styles.active : ''}`}
            onClick={() => setSelectedLevel('all')}
          >
            All Levels
          </button>
          {levels.map((level) => (
            <button
              key={level}
              className={`${styles.option} ${selectedLevel === level ? styles.active : ''}`}
              onClick={() => setSelectedLevel(level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
