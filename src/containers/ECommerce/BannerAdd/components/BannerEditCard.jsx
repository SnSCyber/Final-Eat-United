import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import showResults from '../../../../utils/showResults';
import postBanner from '../../../../utils/api/base/postBanner';
import BannerEditForm from './BannerEditForm';

const PaymentCard = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Main Information</h5>
        </div>
        <BannerEditForm onSubmit={postBanner} />
      </CardBody>
    </Card>
  </Col>
);

export default PaymentCard;
