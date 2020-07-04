import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

interface CartDropDownProps {
  cartItems: [];
}
const CartDropDown: React.FC<CartDropDownProps> = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((c, i) => (
          <CartItem key={i} item={c} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  cartItems: state.cart.cartItems,
});
export default connect(mapStateToProps, {})(CartDropDown);
