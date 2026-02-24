'use client';

import React from 'react';
import Input from '@/components/ui/Input';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  resultCount: number;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  resultCount,
}) => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.search}>
        <Input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          fullWidth
        />
      </div>

      <div className={styles.controls}>
        <div className={styles.results}>{resultCount} courses found</div>

        <div className={styles.sort}>
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
