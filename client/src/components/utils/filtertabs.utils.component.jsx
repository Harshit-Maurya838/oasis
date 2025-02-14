import React, { useState, useEffect } from "react";
import "../../styles/utils/utils.styles.css";
import "../../styles/utils/filtertabs.utils.styles.css";

function FilterTabs({className, enableText = "All", filters = [] }) {
  const [isDisabled, setDisabled] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);

  useEffect(() => {
    console.log(activeFilters);
  }, [activeFilters]);

  const handleClick = (element) => {
    setDisabled(true);

    let value = element.currentTarget.children[0].innerHTML;

    if (!element.currentTarget.classList.contains("filActive")) {
      setActiveFilters([...activeFilters, value]);
      element.currentTarget.classList.add("filActive");
    } else {
      setActiveFilters(activeFilters.filter((item) => item !== value));
      element.currentTarget.classList.remove("filActive");
    }
  };

  const resetFilter = () => {
    setDisabled(false);
    document.querySelectorAll(".filltabs").forEach((item) => {
      item.classList.remove("filActive");
    });
    setActiveFilters([]);
    console.log(activeFilters);
  };

  return (
    <div className={`filterDom ${className}`}>
      <div className="filterControl">
        <div
          onClick={resetFilter}
          className={`filterTab 
                ${!isDisabled ? "filActive" : ""}
            `}
        >
          <span className="text-16-medium">{enableText}</span>
        </div>
      </div>
      <div className="filters">
        {filters.map((tab) => {
          return (
            <div onClick={handleClick} className="filterTab filltabs">
              {<span className="text-16-medium">{tab}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FilterTabs;
