import React from "react";
import "../../styles/productDetail/main.productDetail.styles.css";
import Img1 from "/img/productDetail(temp)/PD_1.png";
import Img2 from "/img/productDetail(temp)/PD_2.png";
import Img3 from "/img/productDetail(temp)/PD_3.png";
import Img4 from "/img/productDetail(temp)/PD_4.png";
import StarRating from "../utils/rating.utils.component";
import "../../styles/utils/utils.styles.css";

const ProductDetail = () => {
    let imgArray = [Img1, Img2, Img3, Img4];
    let data = {
        title: "Luxe Armchair - Left Arm Chute",
        category: "Chair",
        tags: "",
        desc: "Ultra-functional and elegantly minimalist, our Luxe Armchair Collection draws inspiration from Nordic-style décor. It features a neutral color palette and natural wood accents, highlighted by uniquely designed hexagonal legs. ",
        basePrice: 500,
        rating: 4.2,
        discount: 40,
        variants: [
            {
                var_name: "name of the variant",
                var_url: "endpoints of the url",
                var_gallery: ["array of image gallery"],
                var_color: "red",
            },
            {
                var_name: "name of the variant",
                var_url: "endpoints of the url",
                var_gallery: ["array of image gallery"],
                var_color: "blue",
            },
        ],
    };

    return (
        <div className="product_detail">
            <div className="left_sec">
                {imgArray.map((img, index) => {
                    return <img src={img} alt="product" key={index} />;
                })}
            </div>
            <div className="right_sec">
                <h1 className="heading-05">{data.title}</h1>
                <StarRating rating={data.rating} />
                <div className="price_sec">
                    <p className="text-26-semibold disc_price">
                        ${data.basePrice - data.basePrice * (data.discount / 100)}
                    </p>
                    <span className="base_price">${data.basePrice}</span>
                    <span className="text-16-medium discount">-{data.discount}%</span>
                </div>
                <p className="text-20-regular">{data.desc}</p>
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
                        <div class="quantity-box">
                            <div class="btn minus">-</div>
                            <span>1</span>
                            <div class="btn plus">+</div>
                        </div>
                    </div>
                </div>
                <button className="buyBtn"><span className="text-20-semibold">Buy Now</span></button>
                <div className="detailxy">
                    <p><img src="/img/Box.png"/>Free shipping included</p>
                    <p><img src="/img/Leaf.png"/>Made from the best of materials sourced</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
