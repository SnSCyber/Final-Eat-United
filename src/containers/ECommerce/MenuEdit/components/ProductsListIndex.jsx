import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import ProductsListTable from './ProductsListTable';
import CreateTableData from './CreateData';

const ProductsList = () => {
  const productListTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <ProductsListTable productListTableData={productListTableData} />
      </Row>
    </Container>
  );
};

export default ProductsList;
