import React from "react"
import { Link } from "react-router-dom"
import { StockItem } from "../../data"
import "./experience.css"
const Experience = () => {
  return (
    <div className="experience__content">
      {StockItem.map((item) => {
        return (
          <Link to={item.name} className="experience__content-item" key={item.id}>
            <h4>{item.name}</h4>
            <img src={item.logo} alt="experienceImg" />
          </Link>
        )
      })}
    </div>
  )
}

export default Experience
