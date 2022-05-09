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

const CreateDataReviewsListTable = () => {
  const [loadingData, setLoadingData] = useState(true);
  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
        width: 80,
      },
      {
        Header: 'Restaurant',
        accessor: 'restaurant',
      },
      {
        Header: 'Title',
        accessor: 'title',
        disableSortBy: true,
      },
      {
        Header: 'Reviwer Name',
        accessor: 'name',
        disableSortBy: true,
      },
      {
        Header: 'Phone',
        accessor: 'phone',
        disableSortBy: true,
      },
      {
        Header: 'Email',
        accessor: 'email',
        disableSortBy: true,
      },
      {
        Header: 'Description',
        accessor: 'review',
        disableSortBy: true,
      },
      {
        Header: 'Service',
        accessor: 'service',
      },
      {
        Header: 'Quality',
        accessor: 'foodquality',
      },
      {
        Header: 'Value',
        accessor: 'price',
      },
      {
        Header: 'Overall',
        accessor: 'average',
      },
    ], [],
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .get('https://eatatunited.com.na/api-calls/reviews.php?')
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

  const reviewListTableData = { tableHeaderData: columns, tableRowsData: data };
  return reviewListTableData;
};

export default CreateDataReviewsListTable;
