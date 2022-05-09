import React from 'react';
import { Container, Col, Row, ButtonToolbar } from 'reactstrap';
import CouponListTable from './components/CouponsListTable';
import CreateTableData from './components/CreateDataCoup';
import { Link } from 'react-router-dom';
import Layout from '../../Layout/index';

const CouponList = () => {
  const couponListTableData = CreateTableData();

  return (
    <div>
    <Layout />
    <div className="container__wrap">
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Coupon</h3>
          <h3 className="page-subhead subhead">Here you can view and edit coupon 
            information
          </h3>
          <ButtonToolbar className="products-list__btn-toolbar-top">
              <Link className="btn btn-primary products-list__btn-add" to="/e-commerce/coupon_add">Add new Coupon
              </Link>
            </ButtonToolbar>
        </Col>
      </Row>
      <Row>
        <CouponListTable couponListTableData={couponListTableData} />
      </Row>
    </Container>
    </div>
      </div>
  );
};

export default CouponList;
