import React from 'react';
import { ICartItem } from 'interfaces';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from 'store/actions/cart';

interface IProps {
  addItem: Function;
  cartItem: ICartItem;
  clearItemFromCart: Function;
  removeItem: Function;
}

const CheckoutItem: React.FC<IProps> = ({
  addItem,
  cartItem,
  clearItemFromCart,
  removeItem,
}) => {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>

      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>

      <span className='price'>{price}</span>
      <div
        className='remove-button'
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, { clearItemFromCart, addItem, removeItem })(
  CheckoutItem
);
