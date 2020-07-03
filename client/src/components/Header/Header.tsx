import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

interface HeaderProps {
  currentUser: {} | null;
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

export default Header;