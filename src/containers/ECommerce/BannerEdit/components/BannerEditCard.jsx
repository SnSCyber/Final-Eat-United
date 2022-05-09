import React, { useState, useEffect } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import showResults from '../../../../utils/showResults';
import axios from 'axios';
import postBanner from '../../../../utils/api/base/postBanner';
import getBannerByID from '../../../../utils/api/base/getBannerByID';
import BannerEditForm from './BannerEditForm';


function SetResults(textInput) {
  const { id } = useParams(); 
const [loadingData, setLoadingData] = useState(true);
const [data, setData] = useState([]);
  
  useEffect(() => {
    async function getData() {
      await axios
        .get('https://eatatunited.com.na/api-calls/getBanner.php?')
        .then((response) => {
          // check if the data is populated
          console.log({ id });
          console.log(response.data);
          setData(response.data);
          // you tell it that you had the result
          setLoadingData(false);
        });
    }
    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);
}

const PaymentCard = () => (
  
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Main Information</h5>
        </div>
        <BannerEditForm 
          onSubmit={getBannerByID}
          initialValues={getBannerByID} 
        />
      </CardBody>
    </Card>
  </Col>
);

export default PaymentCard;
