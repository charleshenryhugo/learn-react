import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

export default function ExpensesList({ expenseItems }) {
  if (expenseItems.length === 0) {
    return <h2 className='expenses-list__fallback'>Found No Expenses!</h2>
  }

  return (
    <ul className='expenses-list'>
      {
        expenseItems.map((expense, index) => (
          <ExpenseItem
            // key={index}  /* key is necessary, but using index is not recommended, because index is not binded to each expense, and will change when expense items array updated */
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))
      }
    </ul>
  )
}
