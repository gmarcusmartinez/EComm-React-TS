import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { setCurrentUser } from '../store/actions/user';
import Header from '../components/Header/Header';
import HomePage from '../pages/HomePage/HomePage';
import ShopPage from '../pages/ShopPage/ShopPage';
import AuthPage from '../pages/AuthPage/AuthPage';

import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

interface AppProps {
  setCurrentUser: Function;
}

const App: React.FC<AppProps> = ({ setCurrentUser }) => {
  React.useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef?.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser({ user });
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={AuthPage} />
      </Switch>
    </>
  );
};

export default connect(null, { setCurrentUser })(App);
