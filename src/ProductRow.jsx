import React from "react";

const ProductRow = ({ productsSet }) => {
  const row = productsSet.map(product => {
    const name = product.stocked 
      ? <span style={{color: 'black'}}>{product.name}</span> 
      : <span style={{color: 'red'}}>{product.name}</span>;
    
    return (
      <tr key={product.id}>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    )
  });

  return (
    <>{row}</>
  );
}

export default ProductRow;
