import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../store/selectors/shop';
import CollectionPreview from '../CollectionPreview';

interface CollectionsOverviewProps {
  collections: any[];
}
const CollectionsOverview: React.FC<CollectionsOverviewProps> = ({
  collections,
}) => {
  let list = collections.map((c) => (
    <CollectionPreview key={c.id} collection={c} />
  ));

  return <div className='collections-overview'>{list}</div>;
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps, {})(CollectionsOverview);
