import React, { useState } from 'react'
import Card from './UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'

export default function Expenses({ items }) {
  const [filterYear, setFilterYear] = useState('2020')

  /* Derived / Computed state */
  /* If we want to manage another state that depends on filterYear, we don't need to define another state. */
  /* instead, we can use Derived / Computed state */
  /* Because the Expenses() function itself will get called again when setFilterYear() is called. */
  const periodText = 'selected year: ' + filterYear

  const dateSelectedHandler = (selectedYear) => {
    console.log('selected year from ExpensesFilter component:', selectedYear)
    setFilterYear(selectedYear)
  }

  return (
    <Card className='expenses'>
      <p>{periodText}</p>
      <ExpensesFilter value={filterYear} onDateSelected={dateSelectedHandler} />
      {
        items.map((expense, index) => (
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))
      }
    </Card>  
  )
}
