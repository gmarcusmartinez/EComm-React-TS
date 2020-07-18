import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionLoading } from 'store/selectors/shop';
import WithSpinner from 'components/SpinnerHOC/WithSpinner';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionLoading,
});

const CollectionsOverviewContainer = connect(
  mapStateToProps,
  null
)(WithSpinner(CollectionsOverview));

export default CollectionsOverviewContainer;
