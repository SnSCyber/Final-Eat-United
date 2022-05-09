import React, { useMemo, useState, useEffect } from 'react';
import { Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import mdiCircleEditOutline from 'mdi-react/CircleEditOutlineIcon';
import ProductEdit from '../../ProductEdit/index';
import deleteResults from '../../../../utils/api/base/delete';

const Img1 = `${process.env.PUBLIC_URL}/img/for_store/dillas.jpg`;
const Img2 = `${process.env.PUBLIC_URL}/img/for_store/pizza.gif`;
const Img3 = `${process.env.PUBLIC_URL}/img/for_store/bsf.jpg`;
const Img4 = `${process.env.PUBLIC_URL}/img/for_store/vsf.jpg`;


const StatusFormatter = ({ value }) => (
  value === 'Enabled' ? <span className="badge badge-success">Enabled</span>
    : <span className="badge badge-disabled">Disabled</span>
);

StatusFormatter.propTypes = {
  value: PropTypes.string.isRequired,
};


const CreateDataProductListTable = () => {
  const [loadingData, setLoadingData] = useState(true);
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        disableSortBy: true,
      },
      {
        Header: 'Quantity',
        accessor: 'quantity',
        disableSortBy: true,
      },
      {
        Header: 'Restarant ID',
        accessor: 'restID',
        disableSortBy: true,
      },
      {
        Header: 'Order Date',
        accessor: 'date',
        disableSortBy: true,
      },
      {
        Header: 'Price, N$',
        accessor: 'price',
      },
    ], [],
  );

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
  
  
  const productListTableData = { tableHeaderData: columns, tableRowsData: data };
  return productListTableData;
};

export default CreateDataProductListTable;
