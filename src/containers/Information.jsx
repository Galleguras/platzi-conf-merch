import React, { useRef, useContext } from 'react';
import '../styles/components/Information.css';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
const Information = ({ history }) => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment');
  };
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
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
          <Link to="checkout/">
            <div className="Information-back">Regresar</div>
          </Link>

          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedicos:</h3>
        {cart.map((item) => (
          <div key={item.title} className="Information-item">
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>{`$ ${item.price}`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
