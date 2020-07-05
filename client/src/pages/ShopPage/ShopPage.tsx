import React from 'react';
import { connect } from 'react-redux';
import WithSpinner from '../../components/SpinnerHOC/WithSpinner';
import { Route, RouteComponentProps } from 'react-router-dom';
import CollectionPage from '../CollectionPage/CollectionPage';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../store/actions/shop';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

interface ShopPageProps extends RouteComponentProps {
  updateCollections: Function;
}

const ShopPage: React.FC<ShopPageProps> = ({ match, updateCollections }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />

      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  );
};

export default connect(null, { updateCollections })(ShopPage);
