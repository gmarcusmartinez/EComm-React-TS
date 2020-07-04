import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../store/actions/cart';
import CustomButton from '../CustomButton/CustomButton';
import { IProduct } from '../../interfaces';

interface CollectionItemProps {
  item: IProduct;
  addItem: Function;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ item, addItem }) => {
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
