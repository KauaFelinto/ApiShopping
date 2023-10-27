import React, {useState, useContext} from 'react';
import {BiSearch} from 'react-icons/bi';
import './SearchBar.css';
import fetchProducts from '../../Api/fetchProducts';
import AppContext from '../../Context/AppContext';


function SearchBar(){

  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);

    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return (
    <form className="search_bar" onSubmit={handleSearch}>
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
