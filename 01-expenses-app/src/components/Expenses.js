import React from 'react'
import Card from './UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

export default function Expenses({ items }) {
  /* React will transform the following JSX into React.createElement(...) */
  // return (
  //   <Card className="expenses">
  //     {
  //       items.map((expense, index) => (
  //         <ExpenseItem
  //           key={index}
  //           title={expense.title}
  //           amount={expense.amount}
  //           date={expense.date}
  //         ></ExpenseItem>
  //       ))
  //     }
  //   </Card>
  // )

  /* createElement(<elementName>, <attributes/props>, childrens) */
  const expenseItemElements = items.map((item, index) => {
    return React.createElement(
      ExpenseItem,
      {
        key: index,
        title: item.title,
        amount: item.amount,
        date: item.date
      }
    )
  })

  return React.createElement(
    Card,
    { className: 'expenses' },
    ...expenseItemElements
  )
}
