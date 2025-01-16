import React from 'react'
import '../../styles/categories/main.categories.styles.css'
import '../../styles/utils/utils.styles.css';
import CategoryCard from '../utils/categoryCard.utils.component';

const Categories = () => {
  return (
    <section id="categories_main">
        <h1 className='heading-04'>Categories</h1>
        <div className="category_container">
        <CategoryCard imageSrc="/img/categories/sitting_room.png" title="Sitting Room"/>
        <div className="row">
            <div className="col">
                <CategoryCard imageSrc="/img/categories/plant_pot.png" title="Accessories"/>
            </div>
            <div className="col">
                <CategoryCard imageSrc="/img/categories/kettle.png" title="Kitchen"/>
            </div>
        </div>
        <CategoryCard imageSrc="/img/categories/bedroom.png" title="Bedroom"/>
        </div>

    </section>
  )
}

export default Categories
