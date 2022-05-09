import React, { useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col, Badge, Table,
} from 'reactstrap';
import axios from 'axios';
import Delete from 'mdi-react/DeleteForeverIcon';
import { useHistory } from 'react-router-dom';
import BasicTableData from '../BasicTableData';


   
const { tableHeaderResponsiveData, tableRowsData } = BasicTableData();

const ResponsiveTable = () => {
  const { t } = useTranslation('common');
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);
  const history = useHistory();
  
useEffect(() => {
  async function getData() {
    await axios
      .get('https://eatatunited.com.na/api-calls/getBanner.php?')
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

const updateTask = (id, e) => {
  history.push(`/e-commerce/banner_add/${id}`);
};

const deleteTask = async (id, e) => {
  await axios.delete('https://eatatunited.com.na/api-calls/deleteBanner.php?id='+id)
  .then((response) => {
    // this only runs on success
    console.log(response);  
    console.log(response.data); 
    alert(JSON.stringify('Deleted Successfully'));  
    window.location.reload();
  }, (err) => {
    // this only runs on error
    console.log('Error While Posting Data', err);
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
                  <td>{item.full_description}</td>
                  <td>{item.date}</td>
                  <td>{item.status}</td>
                  <td> 
                    <button 
                      className="cart__table-btn" 
                      type="button"  
                      onClick={e => updateTask(item.id, e)}
                    >
                      <Delete /> Update
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
