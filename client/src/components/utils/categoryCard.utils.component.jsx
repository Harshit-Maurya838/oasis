import React, { useEffect, useRef, useState } from 'react'
import Button from './button.utils.component';
import '../../styles/utils/utils.styles.css';
import "../../styles/utils/categoryCard.utils.styles.css";

const CategoryCard = ({ imageSrc, title, buttonVisibility: initialButtonVisibility = true }) => {
    const cardRef = useRef(null);
    const [cardStyle, setCardStyle] = useState("large");
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 834);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [buttonVisibility, setButtonVisibility] = useState(initialButtonVisibility);

  const handleResize = () => {
    const cardWidth = cardRef.current.offsetWidth; // Get the card width

    if (cardWidth < 353 && buttonVisibility) {
      setCardStyle("small");
    }else {
      setCardStyle("large");
    }
  };

  const handleResizeMobile = () => {
    const newWindowWidth = window.innerWidth;
    setIsMobileView(newWindowWidth <= 834);
    setWindowWidth(newWindowWidth);
    setButtonVisibility(newWindowWidth >= 571);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResizeMobile);
    return () => {
        window.removeEventListener("resize", handleResizeMobile);
    };
}, []);

useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Call once on mount to set initial styles

    return () => window.removeEventListener("resize", handleResize); // Cleanup
}, []);

const handleCardClick = () => {
    console.log("Card clicked!");
};


  return (
    <div className={`card ${cardStyle}`} ref={cardRef} onClick={!buttonVisibility ? handleCardClick : undefined}>
      <div className="card-content">
        <h2 className="heading-04">{title}</h2>
        {
            buttonVisibility && (<Button variant='outlined'>Shop Now</Button>)
        }
      </div>
      <div className="card_container">
      <img src={imageSrc} alt={title} className="card-image" />
      </div>
    </div>
  )
}

export default CategoryCard
