import React from 'react'
import '../../styles/utils/utils.styles.css'
import '../../styles/utils/button.utils.styles.css'

const Button = ({ variant = "contained", onClick, disabled, children }) => {
    const className = `custom-button ${variant} ${disabled ? "disabled" : ""}`;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
