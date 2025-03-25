import React, { useEffect } from "react";
import PageHeader from "../ui/pageHeader.ui.component";
import "../../styles/pages/categories.pages.styles.css";
import FilterTabs from "../utils/filtertabs.utils.component";
import Panel from "../ui/panel.ui.component";
import DropDown from "../utils/dropdown.utils.component";
import Swiper from "../utils/swiper.utils.component";
import Product from "../utils/productCard.utils.component";

const CategoriesPage = ({ pageTitle, pageDesc, pageBaseUrl }) => {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <div className="PageMain">
      <PageHeader
        classname="PageHeader"
        Title={pageTitle}
        PageDescription={pageDesc}
      />
      <div className="PageBody">
        <div className="PageProducts">
          <FilterTabs
            className={"PageBodyFilterTabs"}
            filters={[
              "Sofa",
              "Accent Chair",
              "Longue Chair",
              "Coffee Table",
              "Center Table",
              "Flower pot",
              "Lamp",
            ]}
          />
          <Panel classname={"cPanelContainer"}>
            <div className="header">
              <span className="heading-04">Top Products</span>
              <DropDown
                items={[
                  {
                    itemname: "High Price",
                    itemcallback: () => { const event = new CustomEvent('HighPrice') ; document.dispatchEvent(event) },
                  },
                ]}
              />
            </div>
          </Panel>
        </div>
        <div className="PageSwiper" >
          <Swiper
            title={'People Also Viewed'}
            children={[...Array(8)].map((item) => {
              return (
                <Product
                  productName={"Something"}
                  price={255}
                  variants={["Pink", "Brown"]}
                />
              );
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
