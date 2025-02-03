import React, { useState , useRef } from "react";
import "../../styles/utils/utils.styles.css";
import "../../styles/utils/dropdown.utils.styles.css";
import "../../components/utils/dropdown.utils.component";
import "../../styles/utils/animations.utils.styles.css";
import ChevronDown from "../../components/icons/chevronDown.icon.component";

function DropDown({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedState , setSelectedState] = useState(items[0].itemname);
  const DropItems = useRef(null);

  const itemClick = (e)=>{
    setSelectedState(e.target.innerHTML);
  }

  return (
    <div
      onClick={() => {

        // isOpen ? ()=>{
        //   DropItems.current.classList.remove('swipedown');        
        //   DropItems.current.classList.add('swipeup');        
        // } : ()=>{
        //   DropItems.current.classList.remove('swipeup');
        //   DropItems.current.classList.add('swipedown');
        // }

        setIsOpen(!isOpen);
      }}
      className={`maindom ${isOpen ? "active_d" : ""}`}
    >
      <div className="dropdom">
        <span>{selectedState}</span>
        <ChevronDown
          width={20}
          classname={`${isOpen ? "activechevron" : ""} dropchevron`}
        />
      </div>
      <div className={`dropitems ${
        isOpen ? "swipeDown" : "swipeUp"
      }`} ref={DropItems}>
        {
          items.map((item,index)=>{
            return(
              <div onClick={(e)=>{
                itemClick(e);
                item.itemcallback()
              }} key={index} className="item fadein">{item.itemname}</div>
            )
          })
        }
      </div>
    </div>
  );
}

export default DropDown;
