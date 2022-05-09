import React from 'react';
import { useTranslation } from 'react-i18next';
import { Badge, Table } from 'reactstrap';
import Panel from '../../../../shared/components/Panel';

const header = [
  { id: 0, title: '#' },
  { id: 1, title: 'Invoice' },
  { id: 2, title: 'Customer Name' },
  { id: 3, title: 'Product' },
  { id: 4, title: 'Quantity' },
  { id: 5, title: 'Date' },
  { id: 6, title: 'Restaurants' },
  { id: 7, title: 'Status' },
];

const rows = [
  {
   
  },
];

const RecentOrders = () => {
  const { t } = useTranslation('common');

  return (
    <Panel lg={12} title={t('dashboard_commerce.recent_orders')}>
      <Table responsive className="table--bordered">
        <thead>
          <tr>
            {header.map(item => (
              <th key={item.id}>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.invoice}</td>
              <td>{item.customer_name}</td>
              <td>{item.product}</td>
              <td>{item.quantity}</td>
              <td>{item.date}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Panel>
  );
};

export default RecentOrders;
