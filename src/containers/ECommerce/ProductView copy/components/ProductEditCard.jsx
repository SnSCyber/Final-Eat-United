import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import axios from 'axios';
import showResults from '../../../../utils/showResults';
import ProductEditForm from './ProductEditForm';
import postResults from '../../../../utils/api/base/post';

const PaymentCard = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Main Information</h5>
        </div>
        <ProductEditForm onSubmit={postResults} />
      </CardBody>
    </Card>
  </Col>
);

export default PaymentCard;
