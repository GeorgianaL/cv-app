import React from 'react';
import { Link } from 'react-router';

const Header = () =>
  <div className="header-container">
    <div className="logo-part">
      <img src={'/assets/img/logo_levi.svg'} role="presentation" alt="logo" />
    </div>
    <div className="login-part">
      <div className="login-btn-div">
        <Link
          to="/login"
          className="btn login-btn"
        >
        Login
        </Link>
        <button className="btn login-btn">Generate PDF</button>
      </div>
    </div>
  </div>;

export default Header;
