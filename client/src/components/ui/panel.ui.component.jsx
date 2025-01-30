import React, { useState, useRef, useEffect } from "react";
import PanelPage from "../utils/panelpage.utils.component";
import "../../styles/panel/main.panel.styles.css";
import SildeButton from "../utils/slidebutton.utils.component";

function Panel({ pages = 4, children }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const panelDom = useRef(null);

  const slide = (value) => {
    setCurrentSlide(value);
  };

  useEffect(() => {
    if (panelDom.current) {
      panelDom.current.children[currentSlide - 1]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }, [currentSlide]);

  return (
    <div>
      <div ref={panelDom} className="panelDom">
        {[...Array(pages)].map((_, index) => {
          return <PanelPage key={index} />;
        })}
      </div>
      <div className="navigation">
        <SildeButton currentSlide={currentSlide} changer={slide} total={pages} />
      </div>
    </div>
  );
}

export default Panel;
