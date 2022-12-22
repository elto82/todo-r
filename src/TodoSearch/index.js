import React from "react";
import "../TodoCounter.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {
 const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Agrega Todo"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />    
  );
}

export { TodoSearch };
