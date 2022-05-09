import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import ReviewsListTable from './components/ReviewsListTable';
import CreateTableData from './components/CreateDataRev';
import Layout from '../../Layout/index';

const ReviewsList = () => {
  const reviewListTableData = CreateTableData();

  return (
    <div>
    <Layout />
    <div className="container__wrap">
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Reviews</h3>
          <h3 className="page-subhead subhead">Here you can view review
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <ReviewsListTable reviewListTableData={reviewListTableData} />
      </Row>
    </Container>
    </div>
      </div>
  );
};

export default ReviewsList;
