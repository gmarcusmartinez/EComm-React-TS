import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from 'assets/crown.svg';
import CartDropDown from 'components/CartDropDown';
import CartIcon from 'components/CartIcon';
import { selectCartHidden } from 'store/selectors/cart';
import { selectCurrentUser } from 'store/selectors/user';
import { signoutStart } from 'store/actions/user';
interface IProps {
  signoutStart: Function;
  currentUser: any;
  hidden: boolean;
}

const Header: React.FC<IProps> = ({ currentUser, hidden, signoutStart }) => {
  const renderSignoutBtn = () =>
    currentUser ? (
      <div className='option' onClick={() => signoutStart()}>
        SIGNOUT
      </div>
    ) : (
      <Link className='option' to='/signin'>
        SIGNIN
      </Link>
    );

  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          Contact
        </Link>
        {renderSignoutBtn()}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps, { signoutStart })(Header);
