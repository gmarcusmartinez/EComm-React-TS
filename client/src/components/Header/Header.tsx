import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../CartIcon/CartIcon';
import { auth } from '../../firebase/firebase.utils';
import CartDropDown from '../CartDropDown/CartDropDown';
import { selectCartHidden } from '../../store/selectors/cart';
import { selectCurrentUser } from '../../store/selectors/user';
import { ReactComponent as Logo } from '../../assets/crown.svg';

interface HeaderProps {
  currentUser: any;
  hidden: boolean;
}

const Header: React.FC<HeaderProps> = ({ currentUser, hidden }) => {
  const renderSignoutBtn = () =>
    currentUser ? (
      <div className='option' onClick={() => auth.signOut()}>
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

export default connect(mapStateToProps, {})(Header);
