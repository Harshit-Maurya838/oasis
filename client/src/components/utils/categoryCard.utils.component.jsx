import React from 'react'
import "../../styles/utils/categoryCard.utils.styles.css";
import Button from './button.utils.component';
import '../../styles/utils/utils.styles.css';

const CategoryCard = ({ imageSrc, title, buttonVisibility = true }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="heading-04">{title}</h2>
        {
            buttonVisibility && (<Button variant='outlined'>Shop Now</Button>)
        }
      </div>
      <img src={imageSrc} alt={title} className="card-image" />
    </div>
  )
}

export default CategoryCard
