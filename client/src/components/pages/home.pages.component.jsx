import React, { useEffect } from "react";
import HeroSection from "../ui/hero.ui.component";
import Categories from "../ui/categories.ui.component";
import FaQ from "../ui/faq.ui.component";
import Panel from "../ui/panel.ui.component";
import DropDown from "../utils/dropdown.utils.component";
import { useProductContext } from "../../productContext";
const HomePage = () => {
  const { product, setProduct } = useProductContext();
  return (
    <>
      <HeroSection />
      <Categories />
      <Panel id={'products'} url={'/products'}>
        <div className="header">
          <h1>Top products</h1>
          <DropDown
            items={[
              { itemname: "Highest Price", itemcallback: () => {
                const sortedProduct = Object.keys(product).reduce((acc, key) => {
                  const sortedArray = [...product[key]].sort((a, b) => b.price - a.price);
                  return {
                    ...acc,
                    [key]: sortedArray
                  };
                }, {});
            
                setProduct(sortedProduct);
              } },
              { itemname: "Top rating", itemcallback: () => {
                const sortedProduct = Object.keys(product).reduce((acc, key) => {
                  const sortedArray = [...product[key]].sort((a, b) => b.rating - a.rating);
                  return {
                    ...acc,
                    [key]: sortedArray
                  };
                }, {});
            
                setProduct(sortedProduct);
              } },
            ]}
          />
        </div>
      </Panel>
      <FaQ />
    </>
  );
};

export default HomePage;
