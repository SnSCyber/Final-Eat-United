import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col, ButtonToolbar } from 'reactstrap';
import ReactTableBase from '../../../../shared/components/table/ReactTableBase';
import { CSVLink, CSVDownload } from "react-csv";

const OrdersListTable = ({ orderListTableData }) => {
  const tableConfig = {
    isEditable: false,
    isSortable: true,
    isResizable: false,
    withPagination: true,
    withSearchEngine: true,
    manualPageSize: [10, 20, 30, 40],
    placeholder: 'Search...',
  };

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">Orders</h5>
            <ButtonToolbar className="products-list__btn-toolbar-top">
            <CSVLink
            className="download-table-xls-button btn btn-success mb-3"
            filename='Eat@United Orders'
            columns={orderListTableData.tableHeaderData}
            data={orderListTableData.tableRowsData}
            onClick={() => {
            console.log("You click the link"); // 👍🏻 Your click handling logic
            
  }}
>
Export Orders to CSV
</CSVLink>
</ButtonToolbar>
          </div>
          <ReactTableBase
            columns={orderListTableData.tableHeaderData}
            data={orderListTableData.tableRowsData}
            tableConfig={tableConfig}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

OrdersListTable.propTypes = {
  orderListTableData: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

export default OrdersListTable;
