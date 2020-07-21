import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'components/Header';
import * as pages from 'pages';
import AuthPage from 'pages/AuthPage';
import { selectCurrentUser } from 'store/selectors/user';
import { checkUserSession } from 'store/actions/user';

interface AppProps {
  checkUserSession: Function;
  currentUser: any;
}

const App: React.FC<AppProps> = ({ currentUser, checkUserSession }) => {
  const redirectUrl = currentUser ? <Redirect to='/' /> : <AuthPage />;
  React.useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
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
export default connect(mapStateToProps, { checkUserSession })(App);
