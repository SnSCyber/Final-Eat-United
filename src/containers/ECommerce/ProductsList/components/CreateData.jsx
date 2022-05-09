import React, { useMemo, useState, useEffect } from 'react';
import { Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Delete from 'mdi-react/DeleteForeverIcon';
import Edit from 'mdi-react/TickCircleIcon';
import ProductEdit from '../../ProductEdit/index';
import deleteResults from '../../../../utils/api/base/delete';
import editProducts from '../../../../utils/api/base/editProducts';

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
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    async function getData() {
      await axios
        .get('https://eatatunited.com.na/api-calls/getProducts.php?')
        .then((response) => {
          // check if the data is populated
          console.log(typeof (data));
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
  
  const handleClick = (item) => {
    const index = data.indexOf(item.payload);
     setActiveIndex(index);
     setActiveItem(data[index]);
     console.log('RESPONSE FROM POST', setActiveItem);
   };
  
  const logDataIfFirstRowClicked = (row) => {
    if (row.index === 0) {
      console.log('FIRST ROW CLICKED');
      console.log(row); 
      console.log(row.original);
    }
  };
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

  const deleteTask = async (id, e) => {
    await axios.delete('https://eatatunited.com.na/api-calls/deleteProduct.php?id='+id)
    .then((response) => {
      // this only runs on success
      console.log(response);  
      console.log(response.data); 
      alert(JSON.stringify('Deleted Successfully'));  
      window.location.reload();
    }, (err) => {
      // this only runs on error
      console.log('Error While Posting Data', err);
    });
  };
  
  const columns = useMemo(
    () => [
      {
        id: 'id',
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
        disableSortBy: true,
      },
      {
        Header: 'Description',
        accessor: 'description',
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
        Header: 'Code',
        accessor: 'code',
        disableSortBy: true,
      },
      {
        Header: 'Restarant ID',
        accessor: 'restID',
        disableSortBy: true,
      },
      {
        Header: 'Price, N$',
        accessor: 'price',
      },
      {
        Header: 'Edit',
        accessor: 'edit',
        disableSortBy: true,
        Cell: row => (
          <div>
            <button 
              className="cart__table-btn"
              type="button" 
              onClick={updateTask}
            >              
              <Edit /> Edit
            </button>
          </div>
      ),
      },
      {
        Header: 'Delete',
        accessor: 'delete',
        disableSortBy: true,
        Cell: row => (
          <div>
            <button 
              className="cart__table-btn"
              type="button" 
              onClick={deleteTask()}
            >              
              <Edit /> Edit
            </button>
          </div>
      ),
      },
    ], [],
  );


  const productListTableData = { tableHeaderData: columns, tableRowsData: data };
  return productListTableData;
};

export default CreateDataProductListTable;
