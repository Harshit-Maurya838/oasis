import React, { useState, useRef, useEffect } from "react";
import PanelPage from "../utils/panelpage.utils.component";
import "../../styles/panel/main.panel.styles.css";
import "../../styles/panel/responsive.panel.styles.css";
import "../../styles/utils/animations.utils.styles.css";
import SildeButton from "../utils/slidebutton.utils.component";
import Product from "../utils/productCard.utils.component";
import API from "../../axios.config.js";
import { useProductContext } from "../../productContext.jsx";
import ProductCardSkeleton from "../utils/productCardSkeleton.jsx";

function Panel({id, pages, children , classname , content , url }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState([]);
  const panelDom = useRef(null);
  const [pageState, setPageState] = useState(pages);
  const [isLoading, setIsLoading] = useState(false);

  const { product , setProduct } = useProductContext();


  const slide = (value) => {
    setCurrentSlide(value);
  };

  useEffect(() => {
    if (panelDom.current) {
      panelDom.current.scrollLeft = panelDom.current.children[currentSlide -1 ]?.offsetLeft;
    }
  }, [currentSlide]);

  useEffect(() => {
    try {
      if (product[currentSlide]?.length > 0) return;
    } catch (e) {
      console.log(e);
    }
    
    const fetchData = async () => {
      setIsLoading(true);
      if (product[currentSlide]?.length > 0) return;
      try {
        console.log(currentSlide);
        const response = await API.get(url, {
          params: {
            page: currentSlide,
            limit: 12
          }
        });
        
        if (response.data.suc) {
          const updatedProduct = {
            ...product,
            [currentSlide]: response.data.data
          };
          setProduct(updatedProduct);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [currentSlide, url, product])
  
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
    <div id={id} className={`panelContainer ${classname}`} >
      {children}
      <div ref={panelDom} className="panelDom">
        {[...Array(pages)].map((_, index) => {
          return (
            <PanelPage key={index}>
              {
                isLoading
                ?[...Array(12)].map((_,index)=>{return (<ProductCardSkeleton key={index} />)}):
                (() => {
                  try {
                    return product[currentSlide].map((item, index) => {
                      return (
                        <Product
                          extraClass="panelCard slideInComponentBtoT"
                          key={index}
                          productId={item._id}
                          imgSrc={item.variants[0].var_gallery[0]}
                          productName={item.name}
                          price={item.price}
                          variants={item.variants}
                          rating={item.rating}
                        />
                      );
                    });
                  } catch (error) {
                    console.error(error);
                    return null;
                  }
                })()
              }
            </PanelPage>
          );
        })}
      </div>
      <div className="navigation">
        <SildeButton
          currentSlide={currentSlide}
          changer={slide}
          total={pageState}
        />
      </div>
    </div>
  );
}

export default Panel;
