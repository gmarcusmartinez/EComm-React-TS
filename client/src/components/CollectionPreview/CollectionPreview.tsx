import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import { ICollection } from '../../interfaces';

interface PreviewCollectionProps {
  collection: ICollection;
}

const PreviewCollection: React.FC<PreviewCollectionProps> = ({
  collection: { title, items },
}) => {
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

export default PreviewCollection;
