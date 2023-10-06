import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({ onSubmit }) => {
  /* One component can have multiple state slices! */
  /* Multiple states won't affect each other */
  const [enteredTitle, setTitle] = useState('')
  const [enteredAmount, setAmount] = useState('')
  const [enteredDate, setDate] = useState('')

  /* Or manage multiple values in one object state */
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })
  /* And update the state like this: */
  // setUserInput((prevState) => {
  //   return {
  //     ...prevState,
  //     enteredTitle: event.target.title
  //   }
  // })

  const onFormSubmit = (event) => {
    // prevent form default submit event behavior: sending request to the sever which hosts this webpage and reloading the page
    event.preventDefault()

    const enteredData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    setTitle('')
    setAmount('')
    setDate('')

    /* call the onSubmit function from parent component */
    onSubmit(enteredData)
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle} /* 2 way binding */
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount} /* 2 way binding */
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date' 
            min='2019-01-01' 
            max='2022-10-31'
            value={enteredDate} /* 2 way binding */
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
