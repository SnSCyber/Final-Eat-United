import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import MenuEditTab from './components/MenuTabs';

const MenuEdit = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Menu Edit</h3>
        <h3 className="page-subhead subhead">Add a new menu by adding the details and selecting prodcts for the menu
        </h3>
      </Col>
    </Row>
    <Row>
      <MenuEditTab />
    </Row>
  </Container>
);

export default MenuEdit;
