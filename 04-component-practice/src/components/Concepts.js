import React from "react"
import ConceptItem from "./ConceptItem"

const Concepts = ({ items }) => {
  return (
    <ul id="concepts">
      {
        items.map((item) => <ConceptItem item={item}></ConceptItem>)
      }
    </ul>
  )
}

export default Concepts