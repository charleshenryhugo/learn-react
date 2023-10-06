import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ onNewExpenseGenerated }) => {
  const expenseFormSubmitHandler = (submittedExpenseData) => {
    console.log('from ExpenseForm component:', submittedExpenseData)
    const newExpenseData = {
      id: Math.random().toString(),
      ...submittedExpenseData
    }

    /* call function from parent App component */
    onNewExpenseGenerated(newExpenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSubmit={expenseFormSubmitHandler}></ExpenseForm>
    </div>
  )
}

export default NewExpense
