import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Greeting from './Greeting';
import store from '../redux/configureStore';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Greeting} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
