import React from 'react';
import './ProductCard.css';
import {MdLibraryAdd} from 'react-icons/md';

function ProductCard(){
  return(
    <section className="product-card">

      <img src="https://http2.mlstatic.com/D_640758-MLA47782243628_102021-W.jpg" alt="image" className="card_image"/>

      <div className="card-infos">
        <h2 className="card-title">iPhone 13</h2>
        <h2 className="card-price">R$3.500,00</h2>
      </div>

      <button type="button" className="button-add">
        <MdLibraryAdd />
      </button>

    </section>
  );
}

export default ProductCard;
