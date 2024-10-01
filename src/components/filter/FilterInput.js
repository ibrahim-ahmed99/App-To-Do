import React, { useState } from "react";

const FilterInput = ({ filteration }) => {
  const [filter, setFilter] = useState("");

  const filterHandler = (e) => {
    const name = e.target.value;
    setFilter(name);
    filteration(name);
  };

  return (
    
      <input
        type="text"
        placeholder="search"
        className="search-filter"
        value={filter}
        onChange={(i) => filterHandler(i)}
      ></input>
    
  );
};
export default FilterInput;
