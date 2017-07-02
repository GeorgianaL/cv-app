import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { browserHistory } from 'react-router';

const requireAuth = (MyComponent) => {
  @inject('auth') @observer
  class AuthWrapper extends Component {
    componentWillMount() {
      const { auth: { isLoggedIn }} = this.props;
      if (!isLoggedIn) {
        browserHistory.push('/login');
      }
    }

    render() {
      const { auth: { isLoggedIn }} = this.props;
      return isLoggedIn ? <MyComponent {...this.props} /> : null;
    }
  }

  return AuthWrapper;
};

export default requireAuth;
