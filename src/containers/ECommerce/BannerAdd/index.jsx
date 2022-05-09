import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import BannerEditCard from './components/BannerEditCard';
import BannerCurrentData from './components/BannerCurrentData';

const BannerEdit = () => (
  <Container>
    <Row>
      <Col md={12}>
      <h3 className="page-title">Banner Wizard</h3>
        <h3 className="page-subhead subhead">Fill in the form to add a new banner or edit a current one...
        </h3>
      </Col>
    </Row>
    <Row>
      <BannerCurrentData />
    </Row>
    <Row>
      <BannerEditCard />
    </Row>
  </Container>
);

export default BannerEdit;
