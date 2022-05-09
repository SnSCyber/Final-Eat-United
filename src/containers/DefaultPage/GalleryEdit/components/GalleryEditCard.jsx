import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import showResults from '../../../../utils/showResults';
import FileUpload from './GalleryEditForm';
import postGallery from '../../../../utils/api/base/postImages';

const PaymentCard = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Drop Files to Upload</h5>
        </div>
        <FileUpload/>
      </CardBody>
    </Card>
  </Col>
);

export default PaymentCard;
