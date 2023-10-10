import React, { useState } from 'react'
import Card from './UI/Card'
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'

export default function Expenses({ items }) {
  const [filterYear, setFilterYear] = useState('2020')

  const dateSelectedHandler = (selectedYear) => {
    setFilterYear(selectedYear)
  }

  const yearOptions = Array.from(new Set(items.map(item => item.date.getFullYear().toString())))

  const expenseItemsFilteredByYear = items.filter(item => item.date.getFullYear().toString() === filterYear)

  return (
    <Card className='expenses'>
      <ExpensesFilter value={filterYear} yearOptions={yearOptions} onDateSelected={dateSelectedHandler} />
      <ExpensesChart expenses={expenseItemsFilteredByYear} />
      <ExpensesList expenseItems={expenseItemsFilteredByYear}></ExpensesList>
    </Card>  
  )
}
