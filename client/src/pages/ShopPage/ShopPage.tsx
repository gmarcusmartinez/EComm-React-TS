import React from 'react';
import { SHOP_DATA } from './data';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

const ShopPage = () => {
  const collections = SHOP_DATA;

  let list = collections.map((c) => (
    <CollectionPreview key={c.id} collection={c} />
  ));
  return <div className='shop-page'>{list}</div>;
};

export default ShopPage;
