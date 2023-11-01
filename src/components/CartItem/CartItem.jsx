import React from 'react';
import propTypes from 'prop-types';
import {BsFillCartDashFill} from 'react-icons/bs';
import formatCurrency from '../../Utils/formatCurrency';
import './CartItem.css';

function CartItem({data}){

  const {thumbnail, title, price } = data;

  return(
    <section className="cart-item">
      <img src={thumbnail}
        alt="imagem do produto"
        className="cart-image" />
      <div className="cart-content">
        <h3 className="cart-title">{title}</h3>
        <h3 className="cart-price">{formatCurrency(price, 'BRL')}</h3>

        <button type="button" className="remove-item">
          <BsFillCartDashFill/>
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;
