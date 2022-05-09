import React from 'react';
import { Container, Col, Row, ButtonToolbar } from 'reactstrap';
import ProductsListTable from './components/ProductsListTable';
import CreateTableData from './components/CreateData';
import { Link } from 'react-router-dom';
import Layout from '../../Layout/index';


const ProductsList = () => {
  const productListTableData = CreateTableData();

  return (
    <div>
    <Layout />
    <div className="container__wrap">
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Products</h3>
          <h3 className="page-subhead subhead">Here you can see product
            information
          </h3>
          <ButtonToolbar className="products-list__btn-toolbar-top">
              <Link className="btn btn-primary products-list__btn-add" to="/e-commerce/product_add">Add new
                product
              </Link>
            </ButtonToolbar>
        </Col>
      </Row>
      <Row>
        <ProductsListTable productListTableData={productListTableData} />
      </Row>
    </Container>
    </div>
      </div>
  );
};

export default ProductsList;
