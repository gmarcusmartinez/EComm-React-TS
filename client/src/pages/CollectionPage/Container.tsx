import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from 'store/selectors/shop';
import WithSpinner from 'components/SpinnerHOC/WithSpinner';
import CollectionsPage from '.';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionsPageContainer = connect(
  mapStateToProps,
  null
)(WithSpinner(CollectionsPage));

export default CollectionsPageContainer;
