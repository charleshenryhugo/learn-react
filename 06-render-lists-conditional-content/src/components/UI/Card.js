import React from 'react'
import './Card.css'

/* make a wrapper component */
// component composition
function Card(props) {
  const classes = `card ${props.className}`
  /* props.children will always be the content between <Card> and </Card> */
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export default Card