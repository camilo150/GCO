// ProductItem.js
import React from 'react';

const ProductItem = ({ imageUrl, cantidad }) => {
  return (
    <div className="contenidoAMERICANINO">
      <div className="contenedor"></div>
      <img className="imagenRopaAMERICANINO" src={imageUrl} alt="" />
      <label htmlFor="Cantidad">Cantidad<input type="number" value={cantidad} /></label>
      <input className="comprarAMERCANINO" type="button" value="Comprar" />
    </div>
  );
};

export default ProductItem;
