import React, { useState, useEffect } from 'react';
import './Products.css';
import fecthProducts from '../../Api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fecthProducts('iphone').then((response) => {
      setProducts(response);
      console.log(products);
    });

  }, []);
  console.log(products);

  return(
    <section className="products container">
      <ProductCard />
    </section>
  );
}

export default Products;
