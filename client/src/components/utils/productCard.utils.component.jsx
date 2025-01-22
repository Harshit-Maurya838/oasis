import React from "react";
import "../../styles/utils/productCard.utils.styles.css";
import "../../styles/utils/utils.styles.css";
import Button from "./button.utils.component";

const Product = ({ productName, price, imgSrc, variants , rating = 5 }) => {
  return (
    <div className="cardDom">
      <div className="cardImgDom">
        <img src={imgSrc} alt="Product" />
        <div className="button">
          <Button>Add to cart</Button>
        </div>
        <div className="rating">
          <svg
            key={`filled-${0}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fec200"
            width="18"
            height="18"
          >
            <path d="M12 .587l3.668 7.431 8.2 1.196-5.934 5.782 1.4 8.164L12 18.896l-7.334 3.864 1.4-8.164L.133 9.214l8.2-1.196z" />
          </svg>
          <span className="text-13-regular" >{rating}</span>
        </div>
      </div>
      <div className="product_desc">
        <p className="text-18-semibold" >{productName}</p>
        <span className="text-13-semibold" >${price}</span>
      </div>
      <div className="variants">
        {variants.map((variant, index) => (
          <div
            key={index}
            className={`variant_circle ${index == 0 ? "active" : ""}`}
            style={{ backgroundColor: variant.var_color }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Product;
