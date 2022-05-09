import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import RestaurantListTable from '../components/RestaurantData';
import CreateTableData from '../components/CreateData';

const RestaurantList = () => {
  const restarantListTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <RestaurantListTable restarantListTableData={restarantListTableData} />
      </Row>
    </Container>
  );
};

export default RestaurantList;
