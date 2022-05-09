import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import ProductsListTable from './ProductsListTable';
import CreateTableData from './CreateData';


const ProductsList = () => {
  const productListTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Products Ordered</h3>
          <h3 className="page-subhead subhead">Here you can see products
            bought by the customer
          </h3>
        </Col>
      </Row>
      <Row>
        <ProductsListTable productListTableData={productListTableData} />
      </Row>
    </Container>
  );
};

export default ProductsList;
