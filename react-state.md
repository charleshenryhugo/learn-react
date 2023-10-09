## Handle Events
```JSX
<button onClick={() => console.log('clicked')}></button>

const handler = () => console.log('clicked')
<button onClick={handler}></button>
```


## Update UIs & Work with states
```JSX
<App>
  <Header>
    <Metas />
  </Header>
  <Contents>
    <ExpenseItem date={date} />
  </Contents>
</App>
```
`<Header></Header>` and `<Contents>...</Contents>` and so on are just like a function call, so will be called only once at the initial rendering!


Therefore this kind of way doesn't update the DOM!
clickHandler does run when the button is clicked, but DOM won't be updated!
```js
function ExpenseItem(props) {
  let title = props.title
  const clickHandler = () => {
    title = 'undated'
  }

  return (
    <div>
      <h2>{ title }</h2>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  )
}
```

Therefore we need to use React state to tell react when to call a component function again.

`useState` is one of the React hooks. React hooks Must be called directly inside the component function.

```js
import { useState } from 'react'

function ExpenseItem(props) {
  const [ title, setTitle ] = useState(props.title)
  const clickHandler = () => {
    setTitle('updated')
  }

  return (
    <div>
      <h2>{ title }</h2>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  )
}
```

use the functional form when setting state of object depends on the previous state:
```js
const [userInput, setUserInput] = useState({
  enteredTitle: '',
  enteredAmount: '',
  enteredDate: '',
})

// the functional way will ensure the prevState is the accurate previous state
setUserInput((prevState) => {
  return {
    ...prevState,
    enteredTitle: event.target.title
  }
})

// However in this way, cannot ensure "userInput" is the accurate previous state
setUserInput({
  ...userInput,
  enteredTitle: event.target.value,
})
```

## Components and State