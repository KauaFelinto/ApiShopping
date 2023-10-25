import React, {useState} from 'react';
import {BiSearch} from 'react-icons/bi';
import './SearchBar.css';


function SearchBar(){

  const [searchValue, setSearchValue] = useState('');

  return (
    <form className="search_bar">
      <input type="search" 
        value={searchValue}
        placeholder="buscar modelos" 
        className="search_input"
        onChange={ ({target}) => setSearchValue(target.value) }
        required/>
      <button type="submit" className="search_button">
        <BiSearch/>
      </button>
    </form>
  );
}

export default SearchBar;
