import React from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps } from 'react-router-dom';

import { fetchCollectionsStart } from 'store/actions/shop';
import CollectionsPageContainer from 'components/CollectionsOverview/Container';
import CollectionsOverviewContainer from 'components/CollectionsOverview/Container';

interface IProps extends RouteComponentProps {
  fetchCollectionsStart: Function;
  isLoading: boolean;
}

const ShopPage: React.FC<IProps> = ({ match, fetchCollectionsStart }) => {
  React.useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />

      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionsPageContainer}
      />
    </div>
  );
};

export default connect(null, { fetchCollectionsStart })(ShopPage);
