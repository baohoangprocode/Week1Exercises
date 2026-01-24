import React from 'react'
import "./Button.css"

const Button = ({type}) => {
  return (
    <div >
      <button className={`btn ${type}`}>{type}</button>
    </div>
  )
}

export default Button
