import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import GalleryEditCard from './components/GalleryEditCard';
import Layout from '../../Layout/index';

const GalleryEdit = () => (
  <div>
    <Layout />
    <div className="container__wrap">
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Add Images</h3>
      </Col>
    </Row>
    <Row>
      <GalleryEditCard />
    </Row>
  </Container>
  </div>
      </div>
);

export default GalleryEdit;
