import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from 'Components/Layout';
import Home from './Home';
import Register from './Register';
import Login from './Login';

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
