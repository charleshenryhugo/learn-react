JavaScript + XML (HTML)

```jsx
function App() {
  return (
    <div id="container">
      <h2 className="note">Let's get started!</h2>
      <h2 className="note">Let's get started!</h2>
    </div>
  )
}
```

the jsx will be parsed as:
```js
return React.createElement(
  'div', // tag name
  { id: 'container' }, // attributes
  // child elements
  React.createElement(
    'h2',
    { className: 'note' },
    `Let's get started!`
  ),
  React.createElement(
    'h2',
    { className: 'note' },
    `Let's get started!`
  )
)
```
