import React, { useState } from 'react'
import Card from './UI/Card'
import CalendarItem from './CalendarItem'
import './ExpenseItem.css'

function ExpenseItem(props) {
  /* [current state value, function to update the value] = useState(initial value) */
  const [ title, setTitle ] = useState(props.title)

  const clickHandler = () => {
    // ExpenseItem() will be called again!
    setTitle('updated')
    // but setTitle() call is not immediate, it will be scheduled
    console.log('at the moment title is still:', title)
  }
  return (
    <Card className="expense-item">
      <CalendarItem date={props.date} />
      <div className="expense-item__description">
        <h2>{ title }</h2>
        <div className="expense-item__price">${ props.amount }</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem
