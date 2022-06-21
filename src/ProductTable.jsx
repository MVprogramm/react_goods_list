import React from "react";
import ProductCategoryRow from "./ProductCategoryRow.jsx";

class ProductTable extends React.Component {
  state = {
    products:  [
      {id: '1', category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {id: '2', category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {id: '3', category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {id: '4', category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {id: '5', category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {id: '6', category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ],
  };
  
  render() {
    const { filterText, stocked } = this.props;
    let productsList = this.state.products.filter(product => product.name.includes(filterText));
    if (stocked) {
      productsList = productsList.filter(product => product.stocked === !stocked);
    }
    const categories = productsList.map(product => product.category);
    const categoryList = [...new Set(categories)];
    const table = categoryList.map(category => {
      return (
        <ProductCategoryRow 
          key={category}
          category={category}
          productsList={productsList}
        />
      );
    })
    
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {table}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
