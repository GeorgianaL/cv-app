import Auth from './Auth';
import Employee from './Employee';
import { observable } from 'mobx';
import ApiService from '../services/ApiService';

class Store {
  @observable auth;
  @observable employee;
  @observable apiService;

  constructor() {
    this.auth = new Auth(this.createService);
    this.employee = new Employee(this.apiService);
  }

  createService = (token) => {
    this.apiService = new ApiService(token);
  }
}

export default Store;
