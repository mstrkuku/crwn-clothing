import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionsPreview  from '../../components/collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';


const CollectionsOverview = ({ collections }) => (
    <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionsPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});


export default connect(mapStateToProps)(CollectionsOverview);