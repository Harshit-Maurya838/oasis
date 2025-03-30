import React, { useRef, useState, useEffect } from "react";
import "../../styles/utils/utils.styles.css";
import "../../styles/utils/swiper.utils.styles.css";
import "../../styles/utils/animations.utils.styles.css";
import ArrowRightIcon from "../icons/arrowRight.icon.component";
import ArrowLeftIcon from "../icons/arrowLeft.icon.component";
import Product from "./productCard.utils.component.jsx";
import API from "../../axios.config.js";

export default function Swiper({ title, children, className }) {
  const dom = useRef(null);
  const arrowLeft = useState(null);
  const arrowRight = useState(null);
  const [scrollPose, setScrollPose] = useState(0);
  const [swiperContent, setSwiperContent] = useState([]);

  useEffect(() => {
    console.log(scrollPose);
    if (scrollPose == 0) {
      arrowLeft.current.classList.add("inactive");
      arrowRight.current.classList.remove("inactive");
    } else if (scrollPose == dom.current.scrollWidth - 270 * 2) {
      arrowRight.current.classList.add("inactive");
      arrowLeft.current.classList.remove("inactive");
    } else {
      arrowLeft.current.classList.remove("inactive");
      arrowRight.current.classList.remove("inactive");
    }
  }, [scrollPose]);
  
  useEffect(()=>{console.log("Swiper content reset")},[swiperContent]);
  useEffect(() => {
    const fetchSwiperData = async () => {
      try {
        const response = await API.get("/products", {
          params: {
            page: 1,
            limit: 10,
          },
        });

        if (response.data.suc) {
          // let r = response.data.data
          // r.forEach(element => {
          //   swiperContent.push(element);
          // });
          setSwiperContent(response.data.data);
        } else {
          alert("Error loading in swiper content ", response.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchSwiperData();
  }, []);


  const scrollRight = () => {
    dom.current.scrollLeft += 270;
    console.log(dom.current.scrollWidth);
    if (scrollPose >= 0 && scrollPose < dom.current.scrollWidth) {
      setScrollPose((value) => value + 270);
    } else {
      setScrollPose(dom.current.scrollWidth);
    }
  };

  const scrollLeft = () => {
    dom.current.scrollLeft -= 270;
    if (scrollPose > 0 && scrollPose <= dom.current.scrollWidth) {
      setScrollPose((value) => value - 270);
    } else {
      setScrollPose(0);
    }
  };

  return (
    <div className={`swiperDom ${className}`}>
      <div className="swiperHeader">
        <div className="swiperTitle">
          {<span className="heading-06">{title}</span>}
        </div>
        <div className="swiperNavigation">
          <div
            className="arrowDom arrowLeft"
            ref={arrowLeft}
            onClick={scrollLeft}
          >
            <ArrowLeftIcon width={24} />
          </div>
          <div
            className="arrowDom arrowRight"
            onClick={scrollRight}
            ref={arrowRight}
          >
            <ArrowRightIcon width={24} />
          </div>
        </div>
      </div>
      <div ref={dom} className="swiperBody">
        {swiperContent?.length === 0 ? (
          <div className="err-swiper">
            <span className="text-16-medium">No swiper content to display</span>
          </div>
        ) : (
          swiperContent?.map((item, index) => {
            return (
              <Product
                price={item.price}
                key={index}
                prodDesc={item.description}
                productId={item._id}
                productName={item.name}
                variants={item.variants}
                imgSrc={item.variants[0].var_gallery}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
