import React from 'react';
import propTypes from 'prop-types';
import './ProductCard.css';
import {BsFillCartPlusFill} from 'react-icons/bs';

function ProductCard( {data} ) {

  const [title, thumbnail, price] = data;

  return(
    <section className="product-card">

      <img src={thumbnail}
        alt="image" 
        className="card_image"/>

      <div className="card-infos">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-price">{price}</h2>
      </div>

      <button type="button" className="button-add">
        <BsFillCartPlusFill />
      </button>

    </section>
  );
}

export default ProductCard;

ProductCard.propTypes  = {
  data: propTypes.shape({}),
}.isRequired;
