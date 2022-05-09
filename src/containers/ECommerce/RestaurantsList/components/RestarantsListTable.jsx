import React, { useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col, Badge, Table,
} from 'reactstrap';
import axios from 'axios';
import Delete from 'mdi-react/DeleteForeverIcon';
import BasicTableData from '../../RestaurantView/BasicTableData';
import Edit from 'mdi-react/TickCircleIcon';
import { useHistory } from "react-router-dom";


   
const { tableHeaderResponsiveData, tableRowsData } = BasicTableData();

const ResponsiveTable = () => {
  const { t } = useTranslation('common');
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);
  
useEffect(() => {
  async function getData() {
    await axios
      .get('https://eatatunited.com.na/api-calls/getRest.php?')
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

const history = useHistory();

const updateTask = async (id) => {
  history.push("/e-commerce/restaurant_add?id="+id);
};

const updateImage = async (id) => {
  history.push("/default_pages/upload_add?restID="+id);
};

const deleteTask = async (id, e) => {
  await axios.delete('https://eatatunited.com.na/api-calls/deleteRestaurant.php', { params: { id }, withCredentials: true, headers: {'X-Requested-With': 'XMLHttpRequest'} })
  .then((response) => {
    // this only runs on success
    console.log(response);  
    console.log(response.data); 
    alert(JSON.stringify('Deleted Successfully')); 
    window.location.reload(); 
  }, (err) => {
    // this only runs on error
    alert(JSON.stringify('Restaurant failed to delete. Please try again',err));
    window.location.reload(); 
  });
};

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
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
                  <td style={{width: 80,},{paddingRight: 5,},{paddingLeft: 5,}}>{item.description}</td>
                  <td style={{width: 40,},{paddingRight: 5,},{paddingLeft: 5,}}>{item.manager}</td>
                  <td style={{width: 40,},{paddingRight: 5,},{paddingLeft: 5,}}>{item.phone}</td>
                  <td style={{width: 40,},{paddingRight: 5,},{paddingLeft: 5,}}>{item.address}</td>
                  <td style={{width: 40,},{paddingRight: 5,},{paddingLeft: 5,}}>{item.maps}</td>
                  <td style={{width: 40,},{paddingRight: 5,},{paddingLeft: 5,}}>{item.delivery}</td> 
                  <td style={{width: 40,},{paddingRight: 5,},{paddingLeft: 5,}}>{item.pickup}</td>
                  <td><img src={item.image} alt="" style={{height: '100px'},{width: '100px'}}></img></td>
                  <td style={{paddingLeft: 5,}}>
                    <button 
                      className="cart__table-btn" 
                      type="button"  
                      onClick={e => updateTask(item.id, e)}
                    >
                      <Edit /> Edit
                    </button>  
                  </td>
                  <td> 
                    <button 
                      className="cart__table-btn" 
                      type="button"  
                      onClick={e => updateImage(item.id, e)}
                    >
                      <Edit /> Edit image
                    </button>  
                  </td>
                  <td> 
                    <button 
                      className="cart__table-btn" 
                      type="button"  
                      onClick={e => deleteTask(item.id, e)}
                    >
                      <Delete /> Delete
                    </button>  
                  </td>
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
