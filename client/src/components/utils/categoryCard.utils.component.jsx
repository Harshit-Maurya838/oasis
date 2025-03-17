import React, { useEffect, useRef, useState } from 'react'
import Button from './button.utils.component';
import '../../styles/utils/utils.styles.css';
import "../../styles/utils/categoryCard.utils.styles.css";
import { Link } from 'react-router-dom';

const CategoryCard = ({ imageSrc, title, buttonVisibility: initialButtonVisibility = true }) => {
  const cardRef = useRef(null);
  const [cardStyle, setCardStyle] = useState("large");
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 834);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [buttonVisibility, setButtonVisibility] = useState(initialButtonVisibility);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const handleResize = () => {
    const cardWidth = cardRef.current.offsetWidth; // Get the card width

    if (cardWidth < 353 && buttonVisibility) {
      setCardStyle("small");
      
    } else {
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    handleResizeMobile();

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
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


  useEffect(()=>{
    document.querySelectorAll('.slideInTextLtoR')
    .forEach((y,index)=>y.style.animationDelay = `${0.1 + (index/10)}s`);
    document.querySelectorAll('.slideInComponentLtoR')
    .forEach((y,index)=>y.style.animationDelay = `${0.2 + (index/10)}s`);
    document.querySelectorAll('.slideInComponentRtoL')
    .forEach((y,index)=>y.style.animationDelay = `${0.1+ (index/10)}s`);
  },[])

  return (
    <div className={`card fadein ${cardStyle}`} ref={cardRef} onClick={!buttonVisibility ? handleCardClick : undefined}>
      <div className="card-content" ref={elementRef}>
        <h2 className={`heading-04 ${isVisible ? "slideInTextLtoR": ""}`}>{title}</h2>
        {
          buttonVisibility && (<Link to={`/${title == "Sitting Room" ? 'SittingRoom' : title}`} className='Link'><Button extendedClass={isVisible ? 'slideInComponentLtoR' : ""} variant='outlined'>Shop Now</Button></Link>)
        }
      </div>
      <div className={`card_container ${isVisible ? "slideInComponentRtoL" : ""}`}>
        <img src={imageSrc} alt={title} className="card-image" />
      </div>
    </div>
  )
}

export default CategoryCard
