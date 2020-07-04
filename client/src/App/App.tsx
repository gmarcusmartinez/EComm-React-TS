import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { setCurrentUser } from '../store/actions/user';
import Header from '../components/Header/Header';
import HomePage from '../pages/HomePage/HomePage';
import ShopPage from '../pages/ShopPage/ShopPage';
import AuthPage from '../pages/AuthPage/AuthPage';

import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

interface AppProps {
  setCurrentUser: Function;
  currentUser: any;
}

const App: React.FC<AppProps> = ({ setCurrentUser, currentUser }) => {
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
      setCurrentUser(user);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

  const redirectUrl = currentUser ? <Redirect to='/' /> : <AuthPage />;
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' render={() => redirectUrl} />
      </Switch>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps, { setCurrentUser })(App);
