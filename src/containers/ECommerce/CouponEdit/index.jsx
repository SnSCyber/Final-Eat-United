import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CouponEditCard from './components/CouponEditCard';
import CouponTable from './components/CouponCurrentData';

const CouponEdit = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Coupon Wizard</h3>
        <h3 className="page-subhead subhead">Fill in the form to add a new coupon or edit a current one...
        </h3>
      </Col>
    </Row>
    <Row>
      <CouponTable />
    </Row>
    <Row>
      <CouponEditCard />
    </Row>
  </Container>
);

export default CouponEdit;
