import React from 'react'
import '../../styles/utils/utils.styles.css'
import '../../styles/utils/button.utils.styles.css'
import ArrowRightIcon from '../icons/arrowRight.icon.component.jsx'

const Button = ({ variant = "contained", onClick, disabled, children, text = '' , extendedClass}) => {
  const className = `custom-button ${extendedClass} ${variant} ${disabled ? "disabled" : ""}`;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      <ArrowRightIcon classname="custom-button-arrow" width={24} fill={variant == 'outlined' ? 'black' : 'white'}/>
      <div>
        {children}
      </div>
      <ArrowRightIcon classname="custom-button-arrow arrow" width={24} fill={variant == 'outlined' ? 'black' : 'white'}/>
    </button>
  )
}

export default Button
