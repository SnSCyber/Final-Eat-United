import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import Panel from '../../../../shared/components/Panel';
import getTooltipStyles from '../../../../shared/helpers';

const data = [
  { name: '30.10', uv: 400 },
  { name: '31.10', uv: 300 },
  { name: '01.11', uv: 200 },
  { name: '02.11', uv: 278 },
  { name: '03.11', uv: 189 },
  { name: '04.11', uv: 230 },
  { name: '05.11', uv: 349 },
  { name: '06.11', uv: 340 },
  { name: '07.11', uv: 349 },
  { name: '08.11', uv: 349 },
];

const BounceRateArea = ({ dir, themeName }) => {
  const { t } = useTranslation('common');

  return (
    <Panel xl={5} lg={6} md={12} title={t('online_marketing_dashboard.bounce_rate')}>
      <p className="dashboard__bounce-percent">25%</p>
      <div dir="ltr">
        <ResponsiveContainer height={220} className="dashboard__area">
          <AreaChart
            data={data}
            margin={{
              top: 0, right: 0, left: -15, bottom: 0,
            }}
          >
            <XAxis dataKey="name" tickLine={false} reversed={dir === 'rtl'} />
            <YAxis tickLine={false} orientation={dir === 'rtl' ? 'right' : 'left'} />
            <CartesianGrid vertical={false} />
            <Tooltip {...getTooltipStyles(themeName, 'defaultItems')} />
            <Area type="monotone" dataKey="uv" stroke="#24d6a3" fill="#4ce1b6" fillOpacity={0.2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
};

BounceRateArea.propTypes = {
  dir: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(BounceRateArea);
