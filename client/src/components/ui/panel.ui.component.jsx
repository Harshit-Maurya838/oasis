import React, { useState, useRef } from "react";
import PanelPage from "../utils/panelpage.utils.component";
import "../../styles/panel/main.panel.styles.css";
import SildeButton from "../utils/slidebutton.utils.component";

function Panel({ pages = 4, children }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const panelDom = useRef(null);
  const slide = (value) => {
    setCurrentSlide(value);
    console.log(currentSlide)
    panelDom.current.scrollLeft =
      panelDom.current.children[currentSlide].offsetLeft;
  };

  return (
    <div>
      <div ref={panelDom} className="panelDom">
        {[...Array(pages)].map((_, index) => {
          return <PanelPage key={index} />;
        })}
      </div>
      <div className="navigation">
        <SildeButton intial={currentSlide} changer={slide} />
      </div>
    </div>
  );
}

export default Panel;
