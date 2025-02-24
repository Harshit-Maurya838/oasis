import React, { useState, useRef, useEffect } from "react";
import PanelPage from "../utils/panelpage.utils.component";
import "../../styles/panel/main.panel.styles.css";
import "../../styles/panel/responsive.panel.styles.css";
import SildeButton from "../utils/slidebutton.utils.component";
import Product from "../utils/productCard.utils.component";

function Panel({ pages = 4, children , classname }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const panelDom = useRef(null);

  const slide = (value) => {
    setCurrentSlide(value);
  };

  useEffect(() => {
    if (panelDom.current) {
      panelDom.current.scrollLeft = panelDom.current.children[currentSlide -1 ]?.offsetLeft;
    }
  }, [currentSlide]);
  let data = {
    title: "Faux Leather Sofa Couch new premium",
    category: "Chair",
    tags: "",
    desc: "AMAZING CHAIR",
    basePrice: "500",
    rating: "4.2",
    variants: [
      {
        var_name: "name of the variant",
        var_url: "endpoints of the url",
        var_gallery: ["array of image gallery"],
        var_color: "red",
        discount: "40%",
      },
      {
        var_name: "name of the variant",
        var_url: "endpoints of the url",
        var_gallery: ["array of image gallery"],
        var_color: "blue",
        discount: "40%",
      },
    ],
  };
  return (
    <div className={`panelContainer ${classname}`} >
      {children}
      <div ref={panelDom} className="panelDom">
        {[...Array(pages)].map((_, index) => {
          return (
            <PanelPage key={index}>
              {[...Array(20)].map((item, index) => {
                return (
                  <Product
                    extraClass="panelCard"
                    key={index}
                    productId={data.productId}
                    imgSrc={"./img/samples/sample-image.png"}
                    productName={data.title}
                    price={data.basePrice}
                    variants={data.variants}
                    rating={data.rating}
                  />
                );
              })}
            </PanelPage>
          );
        })}
      </div>
      <div className="navigation">
        <SildeButton
          currentSlide={currentSlide}
          changer={slide}
          total={pages}
        />
      </div>
    </div>
  );
}

export default Panel;
