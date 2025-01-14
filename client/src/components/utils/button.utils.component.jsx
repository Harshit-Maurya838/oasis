import React from 'react'
import '../styles/utlis.styles.css'
import '../styles/button.utils.styles.css'

const Button = ({ variant = "contained", onClick, disabled, children }) => {
    const className = `custom-button ${variant} ${disabled ? "disabled" : ""}`;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
