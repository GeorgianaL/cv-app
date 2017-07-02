import * as Cookies from 'js-cookie';
import { observable, action } from 'mobx';
import ApiService from '../services/ApiService';

class Auth {

  @observable isAuth = false;
  @observable errorMsg;

  constructor(createService) {
    if (this.authToken) {
      this.isAuth = true;
      createService(this.authToken);
    }
  }

  get authToken() {
    return Cookies.get('AuthenticationToken');
  }

  @action login = (username, password) => {
    const token = btoa(`${username}:${password}`);
    ApiService.tryLogin(token)
      .then(response => {
        if (response.status === 200) {
          Cookies.set('AuthenticationToken', token);
          this.isAuth = true;
        }
      })
      .catch((error) => {
        this.errorMsg = error.statusText;
      });
  }

  @action logout = () => {
    Cookies.remove('AuthenticationToken');
    this.isAuth = false;
  }


}

export default Auth;
