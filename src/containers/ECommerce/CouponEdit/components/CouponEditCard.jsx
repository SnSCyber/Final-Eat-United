import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import showResults from '../../../../utils/showResults';
import CouponEditForm from './CouponEditForm';
import postCoupon from '../../../../utils/api/base/postCoupon';

const PaymentCard = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Main Information</h5>
        </div>
        <CouponEditForm onSubmit={postCoupon} />
      </CardBody>
    </Card>
  </Col>
);

export default PaymentCard;
