import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import CollectionPage from '../CollectionPage/CollectionPage';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';

interface ShopPageProps extends RouteComponentProps {}

const ShopPage: React.FC<ShopPageProps> = ({ match }) => {
  console.log(match);
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
