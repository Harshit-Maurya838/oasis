import React from 'react'
import '../../styles/utils/productCard.utils.styles.css'

const Product = ({productName, price, imgSrc, variants}) => {
  return (
    <div>
        <img src={imgSrc} alt="Product" />
        <div className="product_desc">
            <p>{productName}</p>
            <span>{price}</span>
        </div>
        <div className="variants">
            {variants.map((variant, index) => (
                <span key={index} className='variant_circle' style={{backgroundColor: variant.var_color}}></span>
            ))}
        </div>
    </div>
  )
}

export default Product
