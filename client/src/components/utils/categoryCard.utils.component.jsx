import React from 'react'
import Button from './button.utils.component';
import '../../styles/utils/utils.styles.css';
import "../../styles/utils/categoryCard.utils.styles.css";

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


// data = {
//   'title':'',
//   'category':"",
//   'tags':'',
//   "desc":"",
//   'basePrice':"",
//   'rating':'',
//   'variants':[{
//     "var_name":"name of the variant",
//     'var_url':"endpoints of the url",
//     'var_gallery':['array of image gallery'],
//     'var_color':"",
//     'discount':"40%",
//   }],
// } 

// furni1 = [
//   '3d model', //base model
// ]

