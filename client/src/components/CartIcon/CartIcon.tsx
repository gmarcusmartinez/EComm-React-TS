import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../store/actions/cart';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

interface CartIconProps {
  toggleCartHidden: Function;
}

const CartIcon: React.FC<CartIconProps> = ({ toggleCartHidden }) => {
  return (
    <div className='cart-icon' onClick={() => toggleCartHidden()}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default connect(null, { toggleCartHidden })(CartIcon);
