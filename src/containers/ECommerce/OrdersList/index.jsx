import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import OrdersListTable from './components/OrdersListTable';
import CreateTableData from './components/CreateData';
import Layout from '../../Layout/index';

const OrdersList = () => {
  const orderListTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Orders</h3>
          <h3 className="page-subhead subhead">Here you can view all your order
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <OrdersListTable orderListTableData={orderListTableData} />
      </Row>
    </Container>
  );
};

export default OrdersList;
