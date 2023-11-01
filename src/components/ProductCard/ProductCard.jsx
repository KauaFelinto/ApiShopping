import React, { useContext } from 'react';
import propTypes from 'prop-types';
import './ProductCard.css';
import {BsFillCartPlusFill} from 'react-icons/bs';
import formatCurrency from '../../Utils/formatCurrency';
import AppContext from '../../Context/AppContext';

function ProductCard({ data }) {

  const {thumbnail, title, price} = data;

  const {cartItens, setCartItens} = useContext(AppContext);

  const handleAddCart = () => setCartItens([ ...cartItens, data ]);

  return(
    <section className="product-card">

      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="image" 
        className="card_image"/>

      <div className="card-infos">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-price">{formatCurrency(price, 'BRL')}</h2>
      </div>

      <button type="button" 
        className="button-add"
        onClick={handleAddCart}>
        <BsFillCartPlusFill />
      </button>

    </section>
  );
}

export default ProductCard;

ProductCard.propTypes  = {
  data: propTypes.shape({}),
}.isRequired;
