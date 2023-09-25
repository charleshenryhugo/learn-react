import React from 'react'
import Card from './UI/Card'
import CalendarItem from './CalendarItem'
import './ExpenseItem.css'

/* A component in React is just a JavaScript function */
function ExpenseItem(props) {
  // 1. must be one single root element
  // 2. "className" instead of "class"
  // 3. inside {} can run normal JS expression
  return (
    <Card className="expense-item">
      <CalendarItem date={props.date} />
      <div className="expense-item__description">
        <h2>{ props.title }</h2>
        <div className="expense-item__price">${ props.amount }</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
