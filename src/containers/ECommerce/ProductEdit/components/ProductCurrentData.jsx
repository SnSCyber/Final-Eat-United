import React, { useState, useEffect } from 'react';
import {
  Card, CardBody, Col, Table, 
} from 'reactstrap';
import BasicTableData from '../../ProductView/BasicTableData2';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const { tableHeaderResponsiveData, tableRowsData } = BasicTableData();

const ResponsiveTable = () => {
  const { t } = useTranslation('common');
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const idValue = urlParams.get("id");
  
useEffect(() => {
  async function getData() {
    await axios
      .get('https://eatatunited.com.na/api-calls/getProductByID.php?idVal='+idValue)
      .then((response) => {
        // check if the data is populated
        console.log(response.data);
        setData(response.data); 
        // you tell it that you had the result
        setLoadingData(false);
      });
     // if (componentMounted.current) { // (5) is component still mounted?
       // setData(response.data); // (1) write data to state
       // setLoadingData(false); // (2) write some value to state
    // }
  }
  if (loadingData) {
    // if the result is not ready so you make the axios call
    getData();
  }
}, []);

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">Current product data being edited</h5>
          </div>
          <Table responsive className="table--bordered">
            <thead>
              <tr>
                {tableHeaderResponsiveData.map(item => (
                  <th>{item.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  <td>{item.restID}</td>
                  <td>{item.code}</td>
                  <td>{item.quantity}</td>
                  <td><img src={item.image} alt=""></img></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ResponsiveTable;
