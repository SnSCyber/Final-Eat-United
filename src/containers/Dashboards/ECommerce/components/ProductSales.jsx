import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import Panel from '../../../../shared/components/Panel';
import getTooltipStyles from '../../../../shared/helpers';
import axios from 'axios';



const ProductSales = ({ rtl, themeName }) => {
  const [data, setData] = useState([]);
   // const activeItem = data[activeIndex];
  const fetchDatas = async () => {
    const response = await axios.get('https://eatatunited.com.na/api-calls/monthlySales.php');
    setData(response.data); 
   };
 
   useEffect(() => {
     fetchDatas();
   }, []);
  const { t } = useTranslation('common');

  return (
    <Panel lg={12} title={t('dashboard_commerce.product_sales')}>
      <div dir="ltr">
        <ResponsiveContainer height={250} className="dashboard__area">
          <AreaChart data={data} margin={{ top: 20, left: -15, bottom: 20 }}>
            <XAxis dataKey="Mon" tickLine={false} reversed={rtl === 'rtl'} />
            <YAxis tickLine={false} orientation={rtl === 'rtl' ? 'right' : 'left'} />
            <Tooltip {...getTooltipStyles(themeName, 'defaultItems')} />
            <Legend />
            <CartesianGrid />
            <Area
              name="Monthly Sales"
              type="monotone"
              dataKey="Total"
              fill="#4ce1b6"
              stroke="#4ce1b6"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
};

ProductSales.propTypes = {
  rtl: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(ProductSales);
