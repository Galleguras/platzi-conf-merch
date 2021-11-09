import React from 'react';
import Checkout from '../containers/Checkout';
import '../styles/components/Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1 className="Header-title">PlatziConf Merch</h1>
      </Link>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
