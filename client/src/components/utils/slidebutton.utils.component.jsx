import React from "react";
import "../../styles/utils/slidebutton.utils.styles.css";
import ChevronRight from "../icons/chevronRight.icon.component";
function SildeButton({ total = 2, text = "slide", initial, changer }) {
    console.log(initial)
  const handlePrev = () => {
    initial > 0 ? changer(initial - 1) : changer(initial);
  };

  const handleNext = () => {
    changer(initial + 1);
    initial += 1
  };

  return (
    <div className="slideDom">
      <div className="prev nav" onClick={handlePrev}>
        <ChevronRight classname="inverted icon" />
        <p className="text-14-regular">Previous</p>
      </div>
      <div className="text">
        <p className="text-16-semibold">{text}</p>
      </div>
      <div className="next nav" onClick={handleNext}>
        <p className="text-14-regular">Next</p>
        <ChevronRight classname="icon" />
      </div>
    </div>
  );
}

export default SildeButton;
