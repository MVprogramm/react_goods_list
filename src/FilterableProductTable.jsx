import React from "react";

import ProductTable from "./ProductTable.jsx";
import SearchBar from "./SearchBar.jsx";

class FilterableProductTable extends React.Component {
 
  state = {
    filterText: '',
    inStockOnly: false
  };

  handleFilterTextChange = (event) => {
    this.setState({
      filterText: event.target.value
    });
  }
  
  handleInStockChange = (event) => {
    this.setState({
      inStockOnly: event.target.checked
    })
  }

  render() {
    const { filterText, inStockOnly } = this.state;
    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>  );
  }
};

export default FilterableProductTable;