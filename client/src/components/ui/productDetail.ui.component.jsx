import React, { useState, useEffect } from "react";
import "../../styles/productDetail/main.productDetail.styles.css";
import Img1 from "/img/productDetail(temp)/PD_1.png";
import Img2 from "/img/productDetail(temp)/PD_2.png";
import Img3 from "/img/productDetail(temp)/PD_3.png";
import Img4 from "/img/productDetail(temp)/PD_4.png";
import StarRating from "../utils/rating.utils.component";
import ImageGallery from "../utils/imgGallery.utils.component";
import Swiper from "../utils/swiper.utils.component";
import Product from "../utils/productCard.utils.component";
import "../../styles/utils/utils.styles.css";
import { useParams } from "react-router-dom";
import { useCart } from "../../CartContext.jsx";
import API from "../../axios.config.js";

const ProductDetail = () => {
  let { id } = useParams();
  const { cart, addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState({
    name: "Product Name",
    price: 0,
    discount: 0,
    rating: 0,
    description: "Product Description",
    variants: [
      {
        var_color: "red",
        var_gallery: [""],
      },
      {
        var_color: "blue",
      },
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.get(`/products/${id}`);
      if (response.data.suc) {
        setData(response.data.data);
        console.log(response.data.data);
      }
      else{
        console.log(response.data.message);
        alert("Error fetching data");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="product_detail">
        <div className="left_sec slideInComponentLtoR">
          <ImageGallery coverImage={data.variants[0].var_gallery[0]} />
        </div>
        <div className="right_sec slideInComponentRtoL">
          <h1 className="heading-05">{data.name}</h1>
          <StarRating rating={data.rating} />
          <div className="price_sec">
            <p className="text-26-semibold disc_price">
              ${(data.price - data.price * (data.discount / 100)).toFixed(2)}
            </p>
            <span className="base_price">${data.price}</span>
            <span className="text-16-medium discount">-{data.discount}%</span>
          </div>
          <p className="text-20-regular">{data.description}</p>
          <div className="prod_detail">
            <div className="variant">
              {data.variants.map((variant, index) => {
                return (
                  <div
                    className="color_box"
                    style={{ backgroundColor: variant.var_color }}
                    key={index}
                  ></div>
                );
              })}
            </div>
            <div className="cart_desc">
              <div className="quantity-box">
                <div
                  className="btn minus"
                  onClick={() => {
                    quantity > 1 ? setQuantity((value) => value - 1) : null;
                  }}
                >
                  -
                </div>
                <span>{quantity}</span>
                <div
                  className="btn plus"
                  onClick={() => {
                    setQuantity((value) => value + 1);
                  }}
                >
                  +
                </div>
              </div>
            </div>
          </div>
          <div className="buy_sec">
            <button
              className="buyBtn"
              onClick={() => {
                addToCart(data, quantity);
              }}
            >
              <span className="text-20-semibold">Add to cart</span>
            </button>
            <button className="buyBtn">
              <span className="text-20-semibold">Buy Now</span>
            </button>
          </div>
          <div className="detailxy">
            <p>
              <img src="/img/Box.png" />
              Free shipping included
            </p>
            <p>
              <img src="/img/Leaf.png" />
              Made from the best of materials sourced
            </p>
          </div>
        </div>
      </div>
      <Swiper className="productDescSwiper" title={"People also viewed"}>
        <Product imgSrc={""} variants={["red", "pink"]} />
      </Swiper>
    </>
  );
};

export default ProductDetail;
