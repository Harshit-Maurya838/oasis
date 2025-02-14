import React from "react";
import "../../styles/utils/slidebutton.utils.styles.css";
import ChevronRight from "../icons/chevronRight.icon.component";

function SildeButton({ total = 2, text = "slide", currentSlide, changer }) {
  const handlePrev = () => {
    currentSlide > 1 ? changer(currentSlide - 1) : null;
  };

  const handleNext = () => {
    currentSlide < total ? changer(currentSlide + 1) : null;
  };

  return (
    <div className="slideDom">
      <div className="prev nav" onClick={handlePrev}>
        <ChevronRight width={24} classname="inverted icon" />
      </div>
      <div className="text">
        <p className="text-16-semibold">{text} {currentSlide}</p>
      </div>
      <div className="next nav" onClick={handleNext}>
        <ChevronRight width={24} classname="icon" />
      </div>
    </div>
  );
}

export default SildeButton;
