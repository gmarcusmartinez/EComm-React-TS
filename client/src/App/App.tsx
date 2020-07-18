import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'components/Header';
import * as pages from 'pages';
import AuthPage from 'pages/AuthPage';
import { setCurrentUser } from 'store/actions/user';
import { selectCurrentUser } from 'store/selectors/user';

interface AppProps {
  setCurrentUser: Function;
  currentUser: any;
}

const App: React.FC<AppProps> = ({ setCurrentUser, currentUser }) => {
  const redirectUrl = currentUser ? <Redirect to='/' /> : <AuthPage />;
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={pages.HomePage} />
        <Route path='/shop' component={pages.ShopPage} />
        <Route path='/signin' render={() => redirectUrl} />
        <Route path='/checkout' component={pages.CheckoutPage} />
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps, { setCurrentUser })(App);
