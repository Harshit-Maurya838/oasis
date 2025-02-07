import React, { useRef , useState , useEffect} from "react";
import "../../styles/utils/utils.styles.css";
import "../../styles/utils/swiper.utils.styles.css";
import "../../styles/utils/animations.utils.styles.css";
import ArrowRightIcon from "../icons/arrowRight.icon.component";
import ArrowLeftIcon from "../icons/arrowLeft.icon.component";

export default function Swiper({ title, children }) {
  const dom = useRef(null);
  const arrowLeft = useState(null);
  const arrowRight = useState(null);
  const[scrollPose , setScrollPose] = useState(0);
  useEffect(()=>{
    console.log(scrollPose);
    if(scrollPose == 0){
      arrowLeft.current.classList.add('inactive');
      arrowRight.current.classList.remove('inactive');
    }
    else if(scrollPose == dom.current.scrollWidth - (270*2)){
      arrowRight.current.classList.add('inactive');
      arrowLeft.current.classList.remove('inactive');
      
    }
    else{
      arrowLeft.current.classList.remove('inactive');
      arrowRight.current.classList.remove('inactive');
    }
  },[scrollPose])

  const scrollRight = () => {
    dom.current.scrollLeft += 270;
    console.log(dom.current.scrollWidth);
    if(scrollPose>=0 && scrollPose < dom.current.scrollWidth){
      setScrollPose((value)=>value + 270);
    }
    else{
      setScrollPose(dom.current.scrollWidth);
    }

  };

  const scrollLeft = () => {
    dom.current.scrollLeft -= 270;
    if(scrollPose>0 && scrollPose<= dom.current.scrollWidth){
      setScrollPose((value)=>value - 270);
    }
    else{
      setScrollPose(0);
    }
  };

  return (
    <div className="swiperDom">
      <div className="swiperHeader">
        <div className="swiperTitle">
          {<span className="heading-06">{title}</span>}
        </div>
        <div className="swiperNavigation">
          <div className="arrowDom arrowLeft" ref={arrowLeft} onClick={scrollLeft}>
            <ArrowLeftIcon width={24} />
          </div>
          <div className="arrowDom arrowRight" onClick={scrollRight} ref={arrowRight}>
            <ArrowRightIcon width={24} />
          </div>
        </div>
      </div>
      <div ref={dom} className="swiperBody">
        {children}
      </div>
    </div>
  );
}
