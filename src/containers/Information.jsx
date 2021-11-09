import React from 'react';
import '../styles/components/Information.css';
import { Link } from 'react-router-dom';
const Information = () => {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" name="name" placeholder="Nombre completo" />
            <input type="text" name="email" placeholder="Correo Electronico" />
            <input type="text" name="address" placeholder="Direccion" />
            <input type="text" name="apto" placeholder="Apto" />
            <input type="text" name="city" placeholder="Ciudad" />
            <input type="text" name="country" placeholder="País" />
            <input type="text" name="state" placeholder="Estado" />
            <input type="text" name="cp" placeholder="CP" />
            <input type="text" name="phone" placeholder="Telefono" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">Regresar</div>
          <Link to="checkout/payment">
            <div className="Information-next">Pagar</div>
          </Link>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedicos:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>ITEM Name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
