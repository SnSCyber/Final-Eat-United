import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import BannerEditCard from './components/BannerEditCard';
import Layout from '../../Layout/index';

const BannerEdit = () => (
  <div>
    <Layout />
    <div className="container__wrap">
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Edit A new Banner</h3>
        <h3 className="page-subhead subhead">Here you can add edit banner
        </h3>
      </Col>
    </Row>
    <Row>
      <BannerEditCard />
    </Row>
  </Container>
  </div>
    </div>
);

export default BannerEdit;
