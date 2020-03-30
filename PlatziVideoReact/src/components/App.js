import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exec path='/login' component={Login} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
