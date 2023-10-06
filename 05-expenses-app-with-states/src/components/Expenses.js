import React, { useState } from 'react'
import Card from './UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'

export default function Expenses({ items }) {
  const [filterYear, setFilterYear] = useState('2020')

  const dateSelectedHandler = (selectedYear) => {
    console.log('selected year from ExpensesFilter component:', selectedYear)
    setFilterYear(selectedYear)
  }

  return (
    <Card className='expenses'>
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
