import React from 'react';
import { connect } from 'react-redux';

import CustomButton from 'components/CustomButton';
import { IProduct } from 'interfaces';
import { addItem } from 'store/actions/cart';

interface IProps {
  item: IProduct;
  addItem: Function;
}

const CollectionItem: React.FC<IProps> = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <div className='name'>{name}</div>
        <div className='price'>{price}</div>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add To Cart
      </CustomButton>
    </div>
  );
};

export default connect(null, { addItem })(CollectionItem);
