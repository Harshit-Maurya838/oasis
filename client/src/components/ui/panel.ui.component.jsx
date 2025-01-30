import React, { useState, useRef } from "react";
import PanelPage from "../utils/panelpage.utils.component";
import "../../styles/panel/main.panel.styles.css";
import SildeButton from "../utils/slidebutton.utils.component";

function Panel({ pages = 4, children }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const panelDom = useRef(null)
  console.log('initial value',currentSlide);
  const slide = (value) => {
    console.log('called value',value)
    setCurrentSlide((val)=>{
      return value
    });
    console.log(currentSlide)
    panelDom.current.children[currentSlide].scrollIntoView();
  };

  return (
    <div>
      <div ref={panelDom} className="panelDom">
        {[...Array(pages)].map((_, index) => {
          return <PanelPage key={index} />;
        })}
      </div>
      <div className="navigation">
        <SildeButton initial={currentSlide} changer={slide} total={pages} />
      </div>
    </div>
  );
}

export default Panel;
