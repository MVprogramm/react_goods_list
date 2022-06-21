import React from "react";
import ProductRow from "./ProductRow.jsx";


const ProductCategoryRow = ({ category, productsList }) => {
  const productsSet = productsList.filter(product => product.category === category);
  const row = productsSet.map(product => {
    const name = product.stocked 
      ? <span style={{color: 'black'}}>{product.name}</span> 
      : <span style={{color: 'red'}}>{product.name}</span>;
    
    return (
      <ProductRow 
      key={product.id}
      name={name}
      price={product.price}
      />
    )
  });
  
  return (
    <>
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
      { row }
    </>
  );
}

export default ProductCategoryRow;
