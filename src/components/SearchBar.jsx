import React from 'react';
import styles from './styles/SearchBar.module.css';
import { IoAdd } from "react-icons/io5";


export default function SearchBar({onSearch}) {
  // acá va tu código
  const [search, setSearch] = React.useState("");
  const {inputName, boton} = styles;
  
  const handleOnSearch = () => {
    // const input = document.getElementById("searchInput");
    // onSearch(input.value);
    // input.value = "";
    onSearch(search);
    setSearch("");
  };
  
  return (
  <div>
    <nav>
      <input 
      className={inputName}
      type="text" 
      placeholder="Agrega la ciudad..."
      autoComplete="off"
      value={search}
      onChange={(e)=> setSearch(e.target.value)}
      onKeyPress={(e)=> {
        if(e.key === "Enter") handleOnSearch()
      }}
      />
      <button className={boton} onClick={handleOnSearch}><IoAdd/></button>
    </nav>
  </div>)
};