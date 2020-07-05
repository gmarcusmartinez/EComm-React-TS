import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { ICollection } from '../../interfaces';
import { selectCollection } from '../../store/selectors/shop';
import CollectionItem from '../../components/CollectionItem/CollectionItem';

interface CollectionPageProps extends RouteComponentProps {
  collection: ICollection;
}

const CollectionPage: React.FC<CollectionPageProps> = ({ collection }) => {
  const { title, items } = collection;
  const list = items.map((item) => (
    <CollectionItem key={item.id} item={item} />
  ));
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>{list}</div>
    </div>
  );
};

const mapStateToProps = (state: any, ownProps: any) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps, {})(CollectionPage);
