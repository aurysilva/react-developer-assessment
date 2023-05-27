import React from 'react';
import styles from './CategorySelectStyle.module.css';

interface CategorySelectProps {
  selectedCategory: string;
  categories: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  selectedCategory,
  categories,
  onChange,
}) => {
  return (
    <select className={styles.select} value={selectedCategory} onChange={onChange}>
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
