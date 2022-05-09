import React, { useMemo, useState, useEffect } from 'react';
import { Badge } from 'reactstrap';
import PropTypes from 'prop-types';
import Save from 'mdi-react/TickCircleIcon';
import axios from 'axios';

const StatusFormatter = ({ value }) => (
  value === 'Enabled' ? <span className="badge badge-success">Enabled</span>
    : <span className="badge badge-disabled">Disabled</span>
);

StatusFormatter.propTypes = {
  value: PropTypes.string.isRequired,
};

const CreateDataRestarantsListTable = () => {
  const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  
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
        Header: 'Address',
        accessor: 'address',
      },
    ], [],
  );
  
  const restarantListTableData = { tableHeaderData: columns, tableRowsData: data };
  return restarantListTableData;
};

export default CreateDataRestarantsListTable;
