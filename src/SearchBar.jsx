import React from "react";

const SearchBar = ({stocked, filterText, handleChange}) => {
  return (
    <form>
      <input 
        type="text"
        placeholder="Search..."
        name="filterText"
        value={filterText}
        onChange={handleChange}
      />
      <p>
        <input 
          type="checkbox"
          name="stocked"
          checked={stocked}
          onChange={handleChange}
        />
        {' '}
        Only show products in stock
      </p>
    </form>
  );
}

export default SearchBar;
