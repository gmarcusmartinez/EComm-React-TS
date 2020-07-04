import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CartItem from '../CartItem/CartItem';
import { ICartItem } from '../../interfaces';
import CustomButton from '../CustomButton/CustomButton';
import { toggleCartHidden } from '../../store/actions/cart';
import { selectCartItems } from '../../store/selectors/cart';

interface CartDropDownProps extends RouteComponentProps {
  cartItems: ICartItem[];
  toggleCartHidden: Function;
}
const CartDropDown: React.FC<CartDropDownProps> = ({
  cartItems,
  history,
  toggleCartHidden,
}) => {
  const list = cartItems.map((c, i) => <CartItem key={i} item={c} />);
  const emptyMsg = <span className='empty-message'>Your cart is empty</span>;

  const handleRedirect = () => {
    history.push('/checkout');
    toggleCartHidden();
  };

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>{cartItems.length ? list : emptyMsg}</div>
      <CustomButton onClick={handleRedirect}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(
  connect(mapStateToProps, { toggleCartHidden })(CartDropDown)
);
