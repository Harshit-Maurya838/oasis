import React, { useState } from "react";
import "../../styles/utils/utils.styles.css";
import "../../styles/utils/dropdown.utils.styles.css";
import "../../components/utils/dropdown.utils.component";
import "../../styles/utils/animations.utils.styles.css";
import ChevronDown from "../../components/icons/chevronDown.icon.component";

function DropDown({ items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className={`maindom ${isOpen ? "active" : ""}`}
    >
      <div className="dropdom">
        <span>Highest Price</span>
        <ChevronDown
          width={20}
          classname={`${isOpen ? "activechevron" : ""} dropchevron`}
        />
      </div>
      <div className="dropitems swipedown">
        <div className="item fadein">items</div>
        <div className="item fadein">items</div>
        <div className="item fadein">items</div>
        <div className="item fadein">items</div>
        <div className="item fadein">items</div>
        <div className="item fadein">items</div>
      </div>
    </div>
  );
}

export default DropDown;
