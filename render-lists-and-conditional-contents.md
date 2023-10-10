# Outputting dynamic list of content

React is able to render the array of JSX element. It will render the elements side by side
```jsx
return (
  <div>
    {[<Card />, <Card />, <Expense />]}
  </div>
)
```

Therefore we can use `map` when rendering dynamic list of content
```jsx
return (
  <Card>
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
```


# Rendering content only when certain conditions are met