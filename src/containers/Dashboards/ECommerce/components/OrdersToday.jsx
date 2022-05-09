import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col } from 'reactstrap';
import {
  BarChart, Bar, Cell, ResponsiveContainer,
} from 'recharts';
import TrendingDownIcon from 'mdi-react/TrendingUpIcon';
import axios from 'axios';

const OrdersToday = () => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const fetchDatas = async () => {
    const response = await axios.get('https://eatatunited.com.na/api-calls/totalOrders.php');
    setData(response.data); 
    setActiveItem(response.data[0]);
   };
 
   useEffect(() => {
     fetchDatas();
   }, []);
 
   const { t } = useTranslation('common');
 
   const handleClick = (item) => {
    const index = data.indexOf(item.payload);
     setActiveIndex(index);
     setActiveItem(data[index]);
   };

  return (
    <Col md={12} xl={3} lg={6} xs={12}>
      <Card>
        <CardBody className="dashboard__card-widget">
          <div className="card__title">
            <h5 className="bold-text">{t('dashboard_commerce.orders_today')}</h5>
          </div>
          <div className="dashboard__total">
            <TrendingDownIcon className="dashboard__trend-icon" />
            <p className="dashboard__total-stat">
              {(activeItem.NumberOfOrders)}
            </p>
            <div className="dashboard__chart-container">
              <ResponsiveContainer height={50}>
                <BarChart data={data}>
                  <Bar dataKey="NumberOfOrders" onClick={handleClick}>
                    {data.map((entry, index) => (
                      <Cell
                        cursor="pointer"
                        fill={index === activeIndex ? '#4ce1b6' : '#c88ffa'}
                        key={entry.id}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrdersToday;
