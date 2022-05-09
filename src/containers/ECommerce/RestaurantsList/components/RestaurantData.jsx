import React, { useState } from 'react';
import {
  ButtonToolbar, Card, CardBody, Col,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactTableBase from '../../../../shared/components/table/ReactTableBase2';

const RestarantsListTable = ({ restarantListTableData }) => {
  const [rows, setData] = useState(restarantListTableData.tableRowsData);
  const updateEditableData = (rowIndex, columnId, value) => {
    setData(old => old.map((item, index) => {
      if (index === rowIndex) {
        return {
          ...old[rowIndex],
          [columnId]: value,
        };
      }
      return item;
    }));
  };

  const tableConfig = {
    isEditable: false,
    isSortable: true,
    isResizable: false,
    withPagination: true,
    withSearchEngine: true,
    manualPageSize: [2, 5, 10, 20],
    placeholder: 'Search...',
  };

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody className="restarants-list">
          <ReactTableBase
            columns={restarantListTableData.tableHeaderData}
            data={restarantListTableData.tableRowsData}
            updateEditableData={updateEditableData}
            tableConfig={tableConfig}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

RestarantsListTable.propTypes = {
  restarantListTableData: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

export default RestarantsListTable;
