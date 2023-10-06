import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({ value, onDateSelected }) => {
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        {/* 2 way binding */}
        <select value={value} onChange={(event) => onDateSelected(event.target.value)}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
