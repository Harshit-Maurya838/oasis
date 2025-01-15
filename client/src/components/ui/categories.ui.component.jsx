import React from 'react'
import '../../styles/categories/main.categories.styles.css'
import '../../styles/utils/utils.styles.css';
import CategoryCard from '../utils/categoryCard.utils.component';

const Categories = () => {
  return (
    <section id="categories_main">
        <h1 className='heading-04'>Categories</h1>
        <CategoryCard imageSrc="/img/hero/hero.png" title="Sitting Room" buttonText="Shop Now"/>
    </section>
  )
}

export default Categories
