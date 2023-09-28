import React from "react"

const ConceptItem = ({ item }) => {
  //   return React.createElement(
  //     'li',
  //     { className: 'concept'},
  //     React.createElement(
  //       'img',
  //       { src: item.image, alt: item.title },
  //     ),
  //     React.createElement(
  //       'h2',
  //       {},
  //       item.title,
  //     ),
  //     React.createElement(
  //       'p',
  //       {},
  //       item.description
  //     )
  //   )

  return (
    <li className="concept">
      <img src={item.image} alt={item.title}></img>
      <h2>{ item.title }</h2>
      <p>{ item.description} </p>
    </li>
  )
}

export default ConceptItem
