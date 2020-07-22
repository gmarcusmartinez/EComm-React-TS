import React from 'react';
import { ICartItem } from 'interfaces';

interface IProps {
  item: ICartItem;
}

const CartItem: React.FC<IProps> = ({ item }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default React.memo(CartItem);
