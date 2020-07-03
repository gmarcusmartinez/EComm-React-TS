import React from 'react';

interface CollectionItemProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const CollectionItem: React.FC<CollectionItemProps> = ({
  id,
  name,
  price,
  imageUrl,
}) => {
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <div className='name'>{name}</div>
        <div className='price'>{price}</div>
      </div>
    </div>
  );
};

export default CollectionItem;
