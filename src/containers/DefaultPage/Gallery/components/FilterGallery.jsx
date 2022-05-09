import React from 'react';
import {
  ButtonToolbar, Card, CardBody, Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';
import Items from './imgs';

const tags = [
  { tag: 'restaurants', title: 'restaurants' },
  { tag: 'products', title: 'products' },
];

const FilterGallery = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Gallery</h5>
        </div>
        <Gallery/>
      </CardBody>
    </Card>
  </Col>
);

export default FilterGallery;
