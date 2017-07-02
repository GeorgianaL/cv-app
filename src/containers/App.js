import React, { Component } from 'react';
// import Auth from '../stores/Auth';

import Header from '../components/header/Header';
import NavigationBar from '../components/nav/NavigationBar';
import { inject, observer } from 'mobx-react';

@inject((store, nextProps) => ({
  populateEmployee: store.employee.populateEmployee,
  ...nextProps,
}))
@observer
class App extends Component {
  componentWillMount() {
    const { populateEmployee } = this.props;
    populateEmployee();
  }

  render() {
    const { children } = this.props;
    return (
      <div className="app">
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <div className="main-view container">
            <div className="col-md-4">
              <NavigationBar />
            </div>
            <div className="col-md-8">
              {children}
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-content">
            {/* <button className="btn-submit login">Submit</button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
