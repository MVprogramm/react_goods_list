import React from "react";

import "./index.scss";
import ProductTable from "./ProductTable.jsx";
import SearchBar from "./SearchBar.jsx";

class FilterableProductTable extends React.Component {
  state = {
    filterText: '',
    stocked: false,
  }

  handleChange = (event) => {
    let {name, value} = event.target;
    
    if (name === 'stocked') value = !this.state.stocked;
   
    this.setState({
      ...this.state,
      [name]: value
    })
  }

  render() {
    const {filterText, stocked} = this.state;
    return (
      <div>
        <SearchBar 
          filterText={filterText}
          stocked={stocked}
          handleChange={this.handleChange}
        />
        <ProductTable 
          filterText={filterText}
          stocked={stocked}
        />
      </div>
    );
  }
};

export default FilterableProductTable;
