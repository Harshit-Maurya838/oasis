import React from 'react'
import "../../styles/utils/categoryCard.utils.styles.css";
import Button from './button.utils.component';

const CategoryCard = ({ imageSrc, title, buttonVisibility = true }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        {
            buttonVisibility && (<Button variant='outlined'>Shop Now</Button>)
        }
      </div>
    </div>
  )
}

export default CategoryCard
