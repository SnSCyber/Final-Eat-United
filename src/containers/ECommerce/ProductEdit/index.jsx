import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ProductEditCard from './components/ProductEditCard';
import ProductCurrentData from './components/ProductCurrentData';

const ProductEdit = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Product Wizard</h3>
        <h3 className="page-subhead subhead">Fill in the form to add a new product or edit a current one...
        </h3>
      </Col>
    </Row>
     <Row>
      <ProductCurrentData />
    </Row>
    <Row>
      <ProductEditCard />
    </Row>
  </Container>
);

export default ProductEdit;
