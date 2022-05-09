import React, { useState, useEffect } from 'react';
import {
  ButtonToolbar, Card, CardBody, Col, Table, 
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactTableBase from '../../../../shared/components/table/ReactTableBase';
import BasicTableData from '../../ProductView/BasicTableData';
import Edit from 'mdi-react/TickCircleIcon';
import Delete from 'mdi-react/TickCircleIcon';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useHistory } from "react-router-dom";

const { tableHeaderResponsiveData, tableRowsData } = BasicTableData();

const ResponsiveTable = () => {
  const { t } = useTranslation('common');
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);
  
useEffect(() => {
  async function getData() {
    await axios
      .get('https://eatatunited.com.na/api-calls/getProducts.php?')
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
  history.push("/e-commerce/product_add?id="+id);
};

const updateImage = async (id) => {
  history.push("/default_pages/upload_add?prodID="+id);
};

const deleteTask = async (id, e) => {
  await axios.delete('https://eatatunited.com.na/api-calls/deleteProduct.php', { params: { id }, withCredentials: true, headers: {'X-Requested-With': 'XMLHttpRequest'}})
  .then((response) => {
    // this only runs on success
    console.log(response);  
    console.log(response.data); 
    alert(JSON.stringify('Deleted Successfully')); 
    window.location.reload();  
  }, (err) => {
    // this only runs on error
    alert(JSON.stringify('Product failed to delete. Please try again',err));
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
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  <td>{item.restID}</td>
                  <td>{item.code}</td>
                  <td>{item.quantity}</td>
                  <td><img src={item.image} alt="" style={{height: '100px'},{width: '100px'}}></img></td>
                  <td> 
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
                      <Edit /> Edit Image
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
