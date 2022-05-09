import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import FilterGallery from './components/FilterGallery';
import Layout from '../../Layout/index';

const Gallery = () => (
  <div>
  <Layout />
  <div className="container__wrap">
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Gallery</h3>
      </Col>
    </Row>
    <Row>
      <FilterGallery />
    </Row>
  </Container>
  </div>
    </div>
);

export default Gallery;
