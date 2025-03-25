import React, { useState, useRef, useEffect } from "react";
import PanelPage from "../utils/panelpage.utils.component";
import "../../styles/panel/main.panel.styles.css";
import "../../styles/panel/responsive.panel.styles.css";
import "../../styles/utils/animations.utils.styles.css";
import SildeButton from "../utils/slidebutton.utils.component";
import Product from "../utils/productCard.utils.component";
import API from "../../axios.config.js";

function Panel({ pages = 4, children , classname }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState([]);
  const panelDom = useRef(null);

  const slide = (value) => {
    setCurrentSlide(value);
  };

  useEffect(() => {
    if (panelDom.current) {
      panelDom.current.scrollLeft = panelDom.current.children[currentSlide -1 ]?.offsetLeft;
    }
  }, [currentSlide]);

  useEffect(()=>{
    const fetchData = async()=>{
      const response  = await API.get('/products',{
        params:{
          page: currentSlide,
          limit:12
        }
      });
      if(response.data.suc){
        setTotalSlides([...response.data.data]);
        console.log(totalSlides[0].rating)
      }
    }
    fetchData();
  },[currentSlide])
  
  useEffect(() => {
    document.querySelectorAll('.panelCard').forEach((item, index) => {
      item.style.animationDelay = `${index * 0.15}s`
      item.style.animationDuration = '.7s';
      item.style.animationTimingFunction = 'ease';
    })
  },[])

  useEffect(()=>{
    document.addEventListener('HighPrice',()=>{
      alert('High Price');
    }
    );

    return ()=>{
      document.removeEventListener('HighPrice',()=>{
        
      });
    }
  },[])

  return (
    <div className={`panelContainer ${classname}`} >
      {children}
      <div ref={panelDom} className="panelDom">
        {[...Array(pages)].map((_, index) => {
          return (
            <PanelPage key={index}>
              {totalSlides.map((item, index) => {
                return (
                  <Product
                    extraClass="panelCard slideInComponentBtoT"
                    key={index}
                    productId={totalSlides[index]._id}
                    imgSrc={"./img/samples/sample-image.png"}
                    productName={totalSlides[index].name}
                    price={totalSlides[index].price}
                    variants={totalSlides[index].variants}
                    rating={totalSlides[index].rating}
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
