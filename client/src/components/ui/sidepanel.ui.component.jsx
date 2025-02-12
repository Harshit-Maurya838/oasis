import React, { useEffect, useRef, useState } from "react";
import "../../styles/utils/utils.styles.css";
import "../../styles/sidePanel/main.sidepanel.styles.css";
import "../../styles/utils/animations.utils.styles.css";
import CancelIcon from "../icons/cancel.icon.component";

function SidePanel({ children, domclass, panelclass, panelHeading, isActive = false, closePanel }) {
  // const closeButtonRef = useRef(null);
  // const [isActive, setActive] = useState(true);
  // useEffect(() => {
  //   closeButtonRef.current.addEventListener("click", () => {
  //     setActive(!isActive);
  //   });
  // }, []);
  return (
    <div className={`screenDom ${domclass} ${isActive ? "active" : "fadeOut"}`}>
      <div className={`sidePanel ${panelclass} ${isActive ? "sidePanelChildActive" : "slideRight"}`}>
        {/* Panel Header with Close Button */}
        <div className="sidePanelHeading">
          <div className="closeDom" onClick={closePanel}>
            <CancelIcon width={26} />
          </div>
          <div className="sidePanelHeading">
            <p className="text-20-semibold">{panelHeading}</p>
          </div>
        </div>

        {/* Panel Content */}
        <div className="sidePanelChild">{children}</div>
      </div>
    </div>
  );
}

export default SidePanel;
