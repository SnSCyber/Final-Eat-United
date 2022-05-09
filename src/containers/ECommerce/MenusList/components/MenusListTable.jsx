import React from 'react';
import {
  ButtonToolbar, Card, CardBody, Col,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactTableBase from '../../../../shared/components/table/ReactTableBase';

const MenusListTable = ({ menuListTableData }) => {
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
        <CardBody className="menus-list">
          <div className="card__title">
            <h5 className="bold-text">Menu</h5>
            <ButtonToolbar className="products-list__btn-toolbar-top">
              <Link className="btn btn-primary products-list__btn-add" to="/e-commerce/menus_add">Add new
                Menu
              </Link>
            </ButtonToolbar>
          </div>
          <ReactTableBase
            columns={menuListTableData.tableHeaderData}
            data={menuListTableData.tableRowsData}
            tableConfig={tableConfig}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

MenusListTable.propTypes = {
  menuListTableData: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

export default MenusListTable;
