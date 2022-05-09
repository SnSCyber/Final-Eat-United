import React, { useMemo, useState, useEffect } from 'react';
import { Badge } from 'reactstrap';
import PropTypes from 'prop-types';
import Edit from 'mdi-react/TickCircleIcon';
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
          console.log(typeof (data));
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

  const updateTask = async (id) => {
    await axios.update('https://eatatunited.com.na/api-calls/editProducts.php?id='+id)
    .then((response) => {
      // this only runs on success
      console.log('RESPONSE FROM POST', response);
      alert(JSON.stringify('Edited Successfully')); 
    }, (err) => {
      // this only runs on error
      console.log('Error While Posting Data', err);
      alert(JSON.stringify('Edited Successfully')); 
    });
  };
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
        Header: 'Manager',
        accessor: 'manager',
        disableSortBy: true,
      },
      {
        Header: 'Phone Number',
        accessor: 'phone',
        disableSortBy: true,
      },
      {
        Header: 'Address',
        accessor: 'address',
      },
      {
        Header: 'Save',
        accessor: 'save',
        disableSortBy: true,
        Cell: row => (
          <div>
            <button 
              className="cart__table-btn"
              type="button" 
              onClick={updateTask()}
            >              
              <Edit /> Edit 
            </button>
          </div>
      ),
      },
    ], [],
  );
  
  const restarantListTableData = { tableHeaderData: columns, tableRowsData: data };
  return restarantListTableData;
};

export default CreateDataRestarantsListTable;
