import React from 'react';
import { Col } from 'reactstrap';
import RestaurantItems from '../../../../shared/components/catalog/RestaurantItems';

import catalogList from '../../Catalog/components/catalog_list';

const RelatedItems = () => (
  <Col md={12} lg={12}>
    <RestaurantItems items={catalogList.slice(0, 4)} />
  </Col>
);

export default RelatedItems;
