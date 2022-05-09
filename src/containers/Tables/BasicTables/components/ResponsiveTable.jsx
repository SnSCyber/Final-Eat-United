import React, { useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col, Badge, Table,
} from 'reactstrap';
import axios from 'axios';
import BasicTableData from './BasicTableData';

   
const { tableHeaderResponsiveData, tableRowsData } = BasicTableData();

const ResponsiveTable = () => {
  const { t } = useTranslation('common');
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);
  
useEffect(() => {
  async function getData() {
    await axios
      .get('http://localhost/api-calls/getProducts.php')
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


const deleteTask = async (id, e) => {
  await axios.delete('http://localhost/api-calls/deleteProduct.php/', { params: { id } })
  .then((response) => {
    // this only runs on success
    console.log(response);  
    console.log(response.data);   
  }, (err) => {
    // this only runs on error
    console.log('Error While Posting Data', err);
  });
};

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('tables.basic_tables.responsive_table')}</h5>
            <h5 className="subhead">Use default table with property <span className="red-text">responsive</span></h5>
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
                  <td> 
                    <button 
                      className="cart__table-btn" 
                      type="button"  
                      onClick={e => deleteTask(item.id, e)}
                    >Delete
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
