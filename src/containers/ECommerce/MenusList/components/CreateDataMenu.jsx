import React, { useMemo } from 'react';
import { Badge } from 'reactstrap';
import PropTypes from 'prop-types';

const StatusFormatter = ({ value }) => (
  value === 'Enabled' ? <span className="badge badge-success">Enabled</span>
    : <span className="badge badge-disabled">Disabled</span>
);

StatusFormatter.propTypes = {
  value: PropTypes.string.isRequired,
};

const CreateDataMenusListTable = () => {
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
        Header: 'Restaurants',
        accessor: 'restaurants',
        disableSortBy: true,
      },
      {
        Header: 'Products',
        accessor: 'products',
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

  const data = [];
  const rows = () => {
      data.push({
        id: '4001',
        name: 'Meaty',
        restaurants: 'Top Restaurant and Bar, Neptune’s Coffee Shop',
        products: '4',
        status:
          (<Badge color="success">Enable</Badge>),
      });
      data.push({
        id: '4002',
        name: 'Sandwiches & Wraps',
        restaurants: 'Neptune’s Coffee Shop',
        products: '0',
        status:
          (<Badge color="success">Enable</Badge>),
      });
  };

  rows();
  const menuListTableData = { tableHeaderData: columns, tableRowsData: data };
  return menuListTableData;
};

export default CreateDataMenusListTable;
