import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ProductEditCard from './components/ProductEditCard';

const ProductEdit = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Edit Product</h3>
        <h3 className="page-subhead subhead">Edit this product by inserting its information and clicking save
        </h3>
      </Col>
    </Row>
    <Row>
      <ProductEditCard />
    </Row>
  </Container>
);

export default ProductEdit;
