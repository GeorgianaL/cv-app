import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { inject, observer } from 'mobx-react';

@inject((store) => ({
  isAuth: store.auth.isAuth,
  login: store.auth.login,
}))
@observer
class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  componentWillMount() {
    const { isAuth } = this.props;
    if (isAuth) {
      browserHistory.push('/');
    }
  }

  handleSubmit = () => {
    const { username, password } = this.state;
    const { login } = this.props;
    login(username, password);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="container">
        <div className="login-page">
          <div className="card card-signup col-md-8">
            <form className="form">
              <div className="content">
                <h4 className="text-center">Login</h4>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="material-icons">face</i>
                  </span>
                  <div className="form-group is-empty">
                    <input
                      className="form-control"
                      placeholder="Username..."
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="material-icons">lock_outline</i>
                  </span>
                  <div className="form-group is-empty">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password..."
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
            </form>
            <button type="button" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
  );
  }
}

export default LoginComponent;
