import React, { Component, PropTypes } from 'react';
import { observer, inject } from 'mobx-react';
import LoginComponent from '../components/login/LoginComponent';

@inject('auth') @observer
class LogIn extends Component {
  render() {
    const { auth } = this.props;
    return (
      <div className="container">
        <LoginComponent logIn={auth.logIn} isLoggedIn={auth.isLoggedIn} />
      </div>
    );
  }
}

LogIn.propTypes = {
  auth: PropTypes.object,
};

export default LogIn;
