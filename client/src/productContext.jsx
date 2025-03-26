import React, { useContext, createContext, useState } from "react";

const ProductContext = createContext();

export function ProductContentContext({children}) {
  const [product, setProduct] = useState({});
  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
}


export const useProductContext = () => useContext(ProductContext);

// Page { pageID : [] }
