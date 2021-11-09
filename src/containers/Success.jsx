import React from 'react';
import '../styles/components/Success.css';
const Success = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Gracias Por tu compra</h2>
        <span>Tu pedido llegara al cabo de unos dias a su direccion</span>
        <div className="Success-map">Google Maps</div>
      </div>
    </div>
  );
};

export default Success;
