import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import HomePage from '../pages/HomePage/HomePage';
import ShopPage from '../pages/ShopPage/ShopPage';
import AuthPage from '../pages/AuthPage/AuthPage';

import { auth } from '../firebase/firebase.utils';

const App = () => {
  const [currentUser, setCurrentUSer] = React.useState({});

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => setCurrentUSer({ user }));
  }, []);

  return (
    <>
      <Header currentUser />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={AuthPage} />
      </Switch>
    </>
  );
};

export default App;
