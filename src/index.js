import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import PersonalDetails from './components/cv/PersonalDetails';
import Skills from './components/cv/Skills';
import Experience from './components/cv/Experience';
import Projects from './components/cv/Projects';
import Certifications from './components/cv/Certifications';
import Education from './components/cv/Education';
import Languages from './components/cv/Languages';
import LoginComponent from './components/login/LoginComponent';
import { Provider } from 'mobx-react';

// import model
import Store from './models/Store';
const store = new Store();

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/material-kit.css';
import '../assets/css/mycss.css';

// login

// const routes = (
//  <Provider auth={employee.auth}>
//    <Router history={browserHistory}>
//      <Route path="/" component={App}>
//        <IndexRoute path="/personal-details" component={requireAuth(PersonalDetails)} />
//        <Route path="/skills" component={requireAuth(Skills)} />
//        <Route path="/experience" component={requireAuth(Experience)} />
//      </Route>
//    </Router>
//  </Provider>
// );

const routes = (
  <Provider auth={store.auth} employee={store.employee}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={PersonalDetails} />
        <Route path="/personal-details" component={PersonalDetails} />;
        <Route path="/skills" component={Skills} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />
        <Route path="/certifications" component={Certifications} />
        <Route path="/education" component={Education} />
        <Route path="/languages" component={Languages} />
      </Route>
      <Route path="/login" component={LoginComponent} />
    </Router>
  </Provider>
);

const documentSelector = document.getElementById('root');

render(
  routes,
  documentSelector
);
