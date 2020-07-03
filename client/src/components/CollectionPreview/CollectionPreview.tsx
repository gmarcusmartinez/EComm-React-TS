import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';

interface PreviewCollectionProps {
  collection: {
    title: string;
    items: any[];
  };
}

const PreviewCollection: React.FC<PreviewCollectionProps> = ({
  collection: { title, items },
}) => {
  let list = items
    .filter((item, i) => i < 4)
    .map(({ id, ...itemProps }) => <CollectionItem key={id} {...itemProps} />);

  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>{list}</div>
    </div>
  );
};

export default PreviewCollection;
