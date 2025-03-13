import React, { useState, useRef, useEffect } from "react";
import "../../styles/utils/imgGallery.utils.styles.css";
import "../../styles/utils/utils.styles.css";
import "../../styles/productDetail/responsive.productDetail.style.css";
import ChevronRight from "../icons/chevronRight.icon.component";

function ImageGallery({
  imgset = [
    "/img/productDetail(temp)/PD_1.png",
    "/img/productDetail(temp)/PD_2.png",
    "/img/productDetail(temp)/PD_3.png",
    "/img/productDetail(temp)/PD_4.png",
  ],
}) {
  const imageRoll = useRef(null);
  const gDomRef = useRef(null);
  const dots = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentSlideRef = useRef(currentSlide);
  var swipes = {
    touchStartX: 0,
    touchEndX: 0,
    touchThreshold: 50,
  };

  const handleNextSlide = () => {
    if (currentSlideRef.current < imgset.length - 1) {
      setCurrentSlide((value) => value + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideRef.current > 0) {
      setCurrentSlide((value) => value - 1);
    }
  };

  useEffect(() => {
    gDomRef.current.addEventListener("touchstart", handleEvent);
    gDomRef.current.addEventListener("touchend", handleTouchEnd);
  }, []);

  useEffect(() => {
    try {
      currentSlideRef.current = currentSlide;
      imageRoll.current.children[currentSlide].scrollIntoView({
        block: "nearest",
      });
      removeDotClass();
      dots.current.children[currentSlide].classList.add("gActiveDot");
    } catch {
      null;
    }
  }, [currentSlide]);

  function removeDotClass() {
    document
      .querySelectorAll(".gDot")
      .forEach((y) => y.classList.remove("gActiveDot"));
  }

  function handleEvent(e) {
    e.preventDefault();
    swipes.touchStartX = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    e.preventDefault();
    swipes.touchEndX = e.changedTouches[0].clientX;

    const deltaX = swipes.touchStartX - swipes.touchEndX;
    if (Math.abs(deltaX) > swipes.touchThreshold) {
      deltaX > 0 ? handleNextSlide() : handlePrevSlide();
    }
  }

  return (
    <div className="gDom" ref={gDomRef}>
      <div className="gNav">
        <ChevronRight
          onClick={handlePrevSlide}
          width={28}
          classname={"gNavChevron gLeft"}
        />
        <ChevronRight
          onClick={handleNextSlide}
          width={28}
          classname={"gNavChevron gRight"}
        />
      </div>
      <div className="gImageContainer">
        <div className="gImageRoll" ref={imageRoll}>
          {imgset.map((image, index) => {
            return (
              <div key={index} className="gImage">
                <img src={image} alt="image" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="gDots" ref={dots}>
        {[...Array(imgset.length)].map((index) => {
          return <div className="gDot" key={index}></div>;
        })}
      </div>
    </div>
  );
}

export default ImageGallery;
