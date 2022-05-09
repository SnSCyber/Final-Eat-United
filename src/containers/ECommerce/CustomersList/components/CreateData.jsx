import React, { useMemo, useState, useEffect } from 'react';
import { Badge } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

const MoneyFormatter = ({ value }) => (
  <div>
    ${value}
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

const CreateDataCustomerListTable = () => {
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
        accessor: 'firstName',
        Header: 'First Name',       
      },
      {
        accessor: 'lastName',
        Header: 'Last Name',       
      },
      {
        accessor: 'number',
        Header: 'Phone Number',
      },
      {
        accessor: 'email',
        Header: 'Email',
      },
      {
        accessor: 'username',
        Header: 'Username',
      },     
      {
        accessor: 'date',
        Header: 'Joined Date',
      },
    ], [],
  );


  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .get('https://eatatunited.com.na/api-calls/customers.php?')
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
  
  const customerListTableData = { tableHeaderData: columns, tableRowsData: data };
  return customerListTableData;
};

export default CreateDataCustomerListTable;
