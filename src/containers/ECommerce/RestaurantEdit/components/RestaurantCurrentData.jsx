import React, { useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col, Badge, Table,
} from 'reactstrap';
import axios from 'axios';
import BasicTableData from '../../RestaurantView/BasicTableData2';



   
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
      .get('https://eatatunited.com.na/api-calls/getRestByID.php?idVal='+idValue)
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
            <h5 className="bold-text">Current restaurant data being edited</h5>
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
                <td style={{width: 40,},{paddingRight: 5,},{paddingLeft: 5,}}>{item.id}</td>
                <td style={{width: 40,},{paddingRight: 5,},{paddingLeft: 5,}}>{item.name}</td>
                <td style={{width: 40,},{paddingRight: 5,},{paddingLeft: 5,}}>{item.description}</td>
                <td style={{width: 40,},{paddingRight: 5,},{paddingLeft: 5,}}>{item.manager}</td>
                <td style={{width: 40,},{paddingRight: 5,},{paddingLeft: 5,}}>{item.phone}</td>
                <td style={{width: 40,},{paddingRight: 5,},{paddingLeft: 5,}}>{item.address}</td>
                <td style={{width: 40,},{paddingRight: 5,},{paddingLeft: 5,}}>{item.maps}</td>
                <td style={{width: 40,},{paddingRight: 5,},{paddingLeft: 5,}}>{item.delivery}</td> 
                <td style={{width: 40,},{paddingRight: 5,},{paddingLeft: 5,}}>{item.pickup}</td>
                <td><img src={item.image} alt="" style={{height: '100px'},{width: '100px'}}></img></td>
                <td style={{paddingLeft: 5,}}></td>
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
