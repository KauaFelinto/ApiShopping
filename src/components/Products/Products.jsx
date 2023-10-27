import React, {  useEffect, useContext } from 'react';
import './Products.css';
import fetchProducts from '../../Api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../Context/AppContext';

function Products() {

  const {products, setProducts, loading, setLoading} = useContext(AppContext);

  useEffect(() => {
    fetchProducts('informática').then((response) => {
      setProducts(response);
      setLoading(false);
    });

  }, []);

  return(
    (loading && <Loading/>) || (<section className="products container">
      {products.map((product) => <ProductCard key={product.id} data={product}/>)}
    </section>)
  );
}

export default Products;
