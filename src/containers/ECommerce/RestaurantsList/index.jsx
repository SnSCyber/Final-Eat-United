import React from 'react';
import { Container, Col, Row, ButtonToolbar } from 'reactstrap';
import RestaurantListTable from './components/RestarantsListTable';
import CreateTableData from './components/CreateDataRes';
import { Link } from 'react-router-dom';
import Layout from '../../Layout/index';

const RestaurantList = () => {
  const restarantListTableData = CreateTableData();

  return (
    <div>
    <Layout />
    <div className="container__wrap">
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Restaurant</h3>
          <h3 className="page-subhead subhead">Here you can view and edit restaurant information
            information
          </h3>
          <ButtonToolbar className="products-list__btn-toolbar-top">
              <Link className="btn btn-primary restarants-list__btn-add" to="/e-commerce/restaurant_add">Add new
                Restarant
              </Link>
            </ButtonToolbar>
        </Col>
      </Row>
      <Row>
        <RestaurantListTable restarantListTableData={restarantListTableData} />
      </Row>
    </Container>
    </div>
      </div>
  );
};

export default RestaurantList;
