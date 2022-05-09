import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import { NewOrderTableProps } from '../../../shared/prop-types/TablesProps';
import { RTLProps } from '../../../shared/prop-types/ReducerProps';
import TotalProducts from './components/TotalProducts';
import TotalProfit from './components/TotalProfit';
import OrdersToday from './components/OrdersToday';
import Subscriptions from './components/Subscriptions';
import TopSellingProducts from './components/TopSellingProducts';
import SalesStatistic from './components/SalesStatistic';
import RecentOrders from './components/RecentOrders';
import ProductSales from './components/ProductSales';
import SalesStatisticBar from './components/SalesStatisticBar';
import OrdersList from '../../ECommerce/OrdersList/index';
import { editTodoElement, fetchTodoListData } from '../../Todo/redux/actions';
import todoCard from '../../Todo/types';
import Layout from '../../Layout/index';


const ECommerceDashboard = ({
  newOrder, todoElements, rtl, editTodoElementAction, fetchTodoListDataAction,
}) => {
  const { t } = useTranslation('common');

  useEffect(() => {
    if (todoElements.length === 0) { // You can delete it if you need
      fetchTodoListDataAction();
    }
  }, [fetchTodoListDataAction, todoElements.length]);

  return (
    <div>
  <Layout />
  <div className="container__wrap">
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('Dashboard')}</h3>
        </Col>
      </Row>
      <Row>
        <TotalProducts />
        <TotalProfit />
        <OrdersToday />
        <Subscriptions />
      </Row>
      <Row>
        <OrdersList rtl={rtl.direction} />
        <ProductSales rtl={rtl.direction} />
      </Row>
    </Container>
    </div>
    </div>
  );
};

ECommerceDashboard.propTypes = {
  newOrder: NewOrderTableProps.isRequired,
  todoElements: PropTypes.arrayOf(todoCard).isRequired,
  fetchTodoListDataAction: PropTypes.func.isRequired,
  editTodoElementAction: PropTypes.func.isRequired,
  rtl: RTLProps.isRequired,

};

const mapStateToProps = (state) => {
  const todoElements = state.todo && state.todo.data && state.todo.data.elements
  && state.todo.data.elements.length > 0 ? [...state.todo.data.elements] : [];
  return ({
    newOrder: state.newOrder.items,
    todoElements,
    rtl: state.rtl,
  });
};

const mapDispatchToProps = {
  fetchTodoListDataAction: fetchTodoListData,
  editTodoElementAction: editTodoElement,
};

export default connect(mapStateToProps, mapDispatchToProps)(ECommerceDashboard);
