import React from "react";
import ProductRow from "./ProductRow.jsx";


const ProductCategoryRow = ({ category, productsList }) => {
  const productsSet = productsList.filter(product => product.category === category);
  
  return (
    <>
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
      <ProductRow productsSet={productsSet} />
    </>
  );
}

export default ProductCategoryRow;
