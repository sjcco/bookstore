import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../helpers';

const CategoryFilter = ({ filterHandler }) => {
  const allCategories = ['All', ...categories];
  return (
    <>
      <select className="select" onChange={e => filterHandler(e.target.value)}>
        {allCategories.map(category => <option key={category} value={category}>{category}</option>)}
      </select>
    </>
  );
};

CategoryFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
