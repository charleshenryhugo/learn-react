import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({ value, yearOptions, onDateSelected }) => {
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        {/* 2 way binding */}
        <select value={value} onChange={(event) => onDateSelected(event.target.value)}>
          {
            yearOptions.map(option => <option key={option} value={option}>{option}</option>)
          }
          <option value="2099">2099</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
