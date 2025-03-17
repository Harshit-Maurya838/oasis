import React, { useState, useEffect, useRef } from "react";
import "../../styles/utils/accordin.utils.styles.css";
import "../../styles/utils/utils.styles.css";
import ArrowUpIcon from "../../components/icons/arrowUp.icon.component";

function Accordin({
  number = "01",
  question = "question",
  answer = "answer",
  className,
  ref,
}) {
  const [isActive, setActive] = useState(false);
  const [isVisible , setIsVisible] = useState(false);
  const elementRef = useRef(null);


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

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  },[])

  return (
    <div
      ref={elementRef}
      className={`Accordin ${className} ${isVisible ? "fadein" : ""}`}
      onClick={() => {
        setActive(!isActive);
      }}
    >
      <div className="number">
        <span className="text-23-medium">{number}</span>
      </div>
      <div className={`content ${isActive ? "ContentActive" : ""}`}>
        <div className="question">
          <p className="text-23-medium">{question}</p>
        </div>
        <div className={`answer ${isActive ? "slidein" : ""}`}>
          <p className="text-18-regular">{answer}</p>
        </div>
      </div>
      <div className={`actions ${isActive ? "ArrowActive" : ""}`}>
        <ArrowUpIcon classname={"arrow"} width={24} />
      </div>
    </div>
  );
}

export default Accordin;
