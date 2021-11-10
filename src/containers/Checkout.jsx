import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';
const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;
  const handleRemove = (product) => () => {
    removeFromCart(product);
  };
  const handleSumTotal = () => {
    /*     let data = [22, 44, 66, 43, 1, 3];
    let sum = data.reduce((acc, el) => acc + el + 453, 0); */
    let sum = cart.reduce((acc, el) => acc + el.price, 0);
    return sum;
  };
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin pedidos...</h3>}
        {cart.map((item) => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
            <button type="button" onClick={handleRemove(item)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to="checkout/information">
            <button type="button">Coninuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
