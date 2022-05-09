import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import CustomersListTable from './components/CustomersListTable';
import CreateTableData from './components/CreateData';
import Layout from '../../Layout/index';

const CustomersList = () => {
  const customerListTableData = CreateTableData();

  return (
    <div>
    <Layout />
    <div className="container__wrap">
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Customer</h3>
          <h3 className="page-subhead subhead">Here you can view all your customers
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <CustomersListTable customerListTableData={customerListTableData} />
      </Row>
    </Container>
    </div>
      </div>
  );
};

export default CustomersList;
