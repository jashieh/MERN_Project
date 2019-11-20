import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';

import Modal from './modal/modal';
import MainPage from './main/main';
import LoginFormContainer from './userform/login_form_container';
import UserForm from './userform/user_form';
import SummaryContainer from './index_page/summary';
import './stylesheets/App.scss';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={ MainPage } />
      <AuthRoute exact path="/signup" component={ UserForm } />
      <AuthRoute exact path="/login" component={ LoginFormContainer } />
      <Route exact path="/summary" component={SummaryContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;

// Install npm i material-uiy