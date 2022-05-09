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

const CreateDataBannersListTable = () => {
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
        accessor: 'name',
        disableSortBy: true,
      },
      {
        Header: 'Creation Date',
        accessor: 'date',
        disableSortBy: true,
      },
      {
        accessor: 'status',
        Header: 'Status',
        disableGlobalFilter: true,
        disableSortBy: true,
        formatter: StatusFormatter,
        width: 110,
      },
    ], [],
  );

  const [data, setData] = useState([]);
  
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
    }
    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);

  const bannerListTableData = { tableHeaderData: columns, tableRowsData: data };
  return bannerListTableData;
};

export default CreateDataBannersListTable;
