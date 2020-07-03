import React from 'react';

import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ShopPage from '../pages/ShopPage/ShopPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/' component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
