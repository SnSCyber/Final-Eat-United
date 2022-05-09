import React from 'react';
import { Col, Container, Row } from 'reactstrap';
// import JustifyTabsBorderedTop from './components/JustifyTabsBorderedTop';
import RestaurauntEditCard from './components/RestaurauntEditCard';
import RestaurauntCurrentData from './components/RestaurantCurrentData';

const RestaurantEdit = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Restaurant Wizard</h3>
        <h3 className="page-subhead subhead">Fill in the form to add a new restaurant or edit a current one
        </h3>
      </Col>
    </Row>
    <Row>
      <RestaurauntCurrentData />
    </Row>
    <Row>
      <RestaurauntEditCard />
    </Row>
  </Container>
);

export default RestaurantEdit;
