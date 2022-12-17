import React from "react";
import { TodoContext } from "../TodoContext";
import "../TodoCounter.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)

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
    />    
  );
}

export { TodoSearch };
