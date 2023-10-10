import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ onNewExpenseGenerated }) => {
  const [formVisible, setFormVisible] = useState(false)

  const expenseFormSubmitHandler = (submittedExpenseData) => {
    const newExpenseData = {
      id: Math.random().toString(),
      ...submittedExpenseData
    }

    /* call function from parent App component */
    onNewExpenseGenerated(newExpenseData)

    setFormVisible(false)
  }

  const formOpenButton = <button onClick={() => setFormVisible(true)}>Add New Expense</button>

  return (
    <div className="new-expense">
      {
        formVisible
          ? <ExpenseForm onSubmit={expenseFormSubmitHandler} onCancel={() => setFormVisible(false)}></ExpenseForm>
          : formOpenButton
      }      
    </div>
  )
}

export default NewExpense
