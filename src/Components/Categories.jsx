import React from 'react';
import Stories from './Stories/StoriesPage';

const Categories = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div>
      <label htmlFor="categories"><Stories/></label>
      <select
        id="categories"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
