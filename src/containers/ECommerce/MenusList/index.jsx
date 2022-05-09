import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import MenuListTable from './components/MenusListTable';
import CreateTableData from './components/CreateDataMenu';

const MenuList = () => {
  const menuListTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Menu</h3>
          <h3 className="page-subhead subhead">Here you can view and edit menu 
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <MenuListTable menuListTableData={menuListTableData} />
      </Row>
    </Container>
  );
};

export default MenuList;
