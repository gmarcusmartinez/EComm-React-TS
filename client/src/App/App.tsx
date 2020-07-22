import { connect } from 'react-redux';
import React, { lazy, Suspense } from 'react';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'components/Header';
import Spinner from 'components/Spinner';

import { checkUserSession } from 'store/actions/user';
import { selectCurrentUser } from 'store/selectors/user';
import ErrorBoundry from 'components/ErrorBoundry';

const AuthPage = lazy(() => import('pages/AuthPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const ShopPage = lazy(() => import('pages/ShopPage'));
const CheckoutPage = lazy(() => import('pages/CheckoutPage'));

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
        <ErrorBoundry>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/checkout' component={CheckoutPage} />
            <Route path='/signin' render={() => redirectUrl} />
          </Suspense>
        </ErrorBoundry>
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps, { checkUserSession })(App);
