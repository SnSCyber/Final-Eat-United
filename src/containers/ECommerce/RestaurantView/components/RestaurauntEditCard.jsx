import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import showResults from '@/utils/showResults';
import RestaurauntEditForm from './RestaurauntEditForm';
import postResturants from '../../../../utils/api/base/postResturants';

const PaymentCard = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Main Information</h5>
        </div>
        <RestaurauntEditForm onSubmit={postResturants} />
      </CardBody>
    </Card>
  </Col>
);

export default PaymentCard;
