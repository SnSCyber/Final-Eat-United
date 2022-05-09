import React, { useMemo, useState, useEffect } from 'react';
import { Badge } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';


const StatusFormatter = ({ value }) => (
  value === 'Enabled' ? <span className="badge badge-success">Enabled</span>
    : <span className="badge badge-disabled">Disabled</span>
);

StatusFormatter.propTypes = {
  value: PropTypes.string.isRequired,
};

const CreateDataCouponsListTable = () => {
  const [loadingData, setLoadingData] = useState(true);
  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
        width: 80,
      },
      {
        Header: 'Name',
        accessor: 'code',
        disableSortBy: true,
      },      
      {
        Header: 'Description',
        accessor: 'description',
        disableSortBy: true,
      },
      {
        Header: 'Creation Date',
        accessor: 'start_date',
        disableSortBy: true,
      },
      {
        Header: 'Status',
        accessor: 'status',
        disableSortBy: true,
      },
      {
        Header: 'Amount',
        accessor: 'amount',
        disableSortBy: true,
      },
    ], [],
  );

  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function getData() {
      await axios
        .get('https://eatatunited.com.na/api-calls/getCoupon.php?')
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
  
  const couponListTableData = { tableHeaderData: columns, tableRowsData: data };
  return couponListTableData;
};

export default CreateDataCouponsListTable;
