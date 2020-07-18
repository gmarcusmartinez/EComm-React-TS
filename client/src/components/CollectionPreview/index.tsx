import React from 'react';
import { ICollection } from 'interfaces';
import CollectionItem from 'components/CollectionItem';

interface IProps {
  collection: ICollection;
}

const CollectionPreview: React.FC<IProps> = ({ collection }) => {
  const { items, title } = collection;
  let list = items
    .filter((item, i) => i < 4)
    .map((item) => <CollectionItem key={item.id} item={item} />);

  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>{list}</div>
    </div>
  );
};

export default CollectionPreview;
