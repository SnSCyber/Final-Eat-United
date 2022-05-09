import React from 'react';
import { Container, Col, Row, ButtonToolbar } from 'reactstrap';
import BannersListTable from './components/BannersListTable';
import CreateTableData from './components/CreateDataBanner';
import { Link } from 'react-router-dom';
import Layout from '../../Layout/index';

const BannersList = () => {
  const bannersListTableData = CreateTableData();

  return (
    <div>
    <Layout />
    <div className="container__wrap">
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Banner</h3>
          <h3 className="page-subhead subhead">Here you can view and edit banner 
            information
          </h3>
          <ButtonToolbar className="products-list__btn-toolbar-top">
              <Link className="btn btn-primary products-list__btn-add" to="/e-commerce/banner_add">Add new Banner
              </Link>
            </ButtonToolbar>
        </Col>
      </Row>
      <Row>
        <BannersListTable bannerListTableData={bannersListTableData} />
      </Row>
    </Container>
    </div>
      </div>
  );
};

export default BannersList;
