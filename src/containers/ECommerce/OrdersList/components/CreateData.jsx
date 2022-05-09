import React, { useMemo, useState, useEffect } from 'react';
import { Badge } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

const MoneyFormatter = ({ value }) => (
  <div>
    N${value}
  </div>
);

MoneyFormatter.propTypes = {
  value: PropTypes.string.isRequired,
};

const StatusFormatter = ({ value }) => (
  value === 'Enabled' ? <span className="badge badge-success">Delivered</span>
    : <span className="badge badge-disabled">Open</span>
);

StatusFormatter.propTypes = {
  value: PropTypes.string.isRequired,
};

const CreateDataOrderListTable = () => {
  const [loadingData, setLoadingData] = useState(true);
  const columns = useMemo(
    () => [
      {
        accessor: 'id',
        Header: 'ID',
        width: 80,
        disableGlobalFilter: true,
      },
      {
        accessor: 'created_at',
        Header: 'Date',
      },
      {
        accessor: 'status',
        Header: 'Order Type',
      },
      {
        accessor: 'customername',
        Header: 'Name',       
      },       
      {
        accessor: 'phone',
        Header: 'Number',
      },      
      {
        accessor: 'email',
        Header: 'Email',
      },     
      {
        accessor: 'address',
        Header: 'Address',
        disableSortBy: true,
      },
      {
        accessor: 'Amount',
        Header: 'Price, N$',
        formatter: MoneyFormatter,
        disableSortBy: true,
      },
      {
        accessor: 'rest',
        Header: 'Restaraunt',
      },
      {
        accessor: 'orderItem',
        Header: 'Description',
        disableSortBy: true,
      },
      {
        accessor: 'items',
        Header: 'Quantity',
        disableSortBy: true,
      },
    ], [],
  );

 
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .get('https://eatatunited.com.na/api-calls/order.php?')
        .then((response) => {
          // check if the data is populated
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
  
  const orderListTableData = { tableHeaderData: columns, tableRowsData: data };
  return orderListTableData;
};

export default CreateDataOrderListTable;
