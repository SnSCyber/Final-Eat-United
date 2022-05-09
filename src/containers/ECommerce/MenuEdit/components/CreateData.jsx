import React, { useMemo } from 'react';
import { Badge } from 'reactstrap';
import PropTypes from 'prop-types';

const Img1 = `${process.env.PUBLIC_URL}/img/for_store/dillas.jpg`;
const Img2 = `${process.env.PUBLIC_URL}/img/for_store/pizza.gif`;
const Img3 = `${process.env.PUBLIC_URL}/img/for_store/bsf.jpg`;
const Img4 = `${process.env.PUBLIC_URL}/img/for_store/vsf.jpg`;

const PhotoFormatter = value => (
  <div className="products-list__img-wrap">
    <img src={value} alt="" />
  </div>
);

const StatusFormatter = ({ value }) => (
  value === 'Enabled' ? <span className="badge badge-success">Added</span>
    : <span className="badge badge-disabled">Removed</span>
);

StatusFormatter.propTypes = {
  value: PropTypes.string.isRequired,
};

const CreateDataProductListTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
        width: 80,
      },
      {
        Header: 'Photo',
        accessor: 'photo',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
      {
        Header: 'Name',
        accessor: 'name',
        disableSortBy: true,
      },
      {
        Header: 'Category',
        accessor: 'category',
        disableSortBy: true,
      },
      {
        Header: 'Quantity',
        accessor: 'quantity',
        disableSortBy: true,
      },
      {
        Header: 'Restarant',
        accessor: 'restarant',
        disableSortBy: true,
      },
      {
        Header: 'Price, N$',
        accessor: 'price',
      },
      {
        Header: 'Status',
        accessor: 'status',
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
        id: '400001',
        photo: PhotoFormatter(Img1),
        name: 'Quesadilla',
        category: 'Meaty',
        quantity: Math.min(4, Math.round(Math.random() * 4)),
        restarant: 'Top Restaurant and Bar',
        price: Math.min(500, (Math.random() * 500) + 20).toFixed(2),
        status: 
          (<Badge color="success">Added</Badge>),
      });
      data.push({
        id: '400002',
        photo: PhotoFormatter(Img2),
        name: 'Pizza',
        category: 'Meaty',
        quantity: Math.min(4, Math.round(Math.random() * 4)),
        restarant: 'Neptune’s Coffee Shop',
        price: Math.min(500, (Math.random() * 500) + 20).toFixed(2),
        status: 
          (<Badge color="success">Added</Badge>),
      });
      data.push({
        id: '400003',
        photo: PhotoFormatter(Img3),
        name: 'Beef Stir Fry',
        category: 'Meaty',
        quantity: Math.min(4, Math.round(Math.random() * 4)),
        restarant: 'Top Restaurant and Bar',
        price: Math.min(500, (Math.random() * 500) + 20).toFixed(2),
        status: 
          (<Badge color="secondary">Removed</Badge>),
      });
      data.push({
        id: '400004',
        photo: PhotoFormatter(Img4),
        name: 'Vegetarian Stir Fry',
        category: 'Vegetarian',
        quantity: Math.min(4, Math.round(Math.random() * 4)),
        restarant: 'Neptune’s Coffee Shop',
        price: Math.min(500, (Math.random() * 500) + 20).toFixed(2),
        status: 
          (<Badge color="secondary">Removed</Badge>),
      });
  };

  rows();
  const productListTableData = { tableHeaderData: columns, tableRowsData: data };
  return productListTableData;
};

export default CreateDataProductListTable;
