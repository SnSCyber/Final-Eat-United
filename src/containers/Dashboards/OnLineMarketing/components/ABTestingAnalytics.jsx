import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import Panel from '../../../../shared/components/Panel';
import getTooltipStyles from '../../../../shared/helpers';

const data = [{ name: 'Mon', a: 59, b: 140 },
  { name: 'Tue', a: 100, b: 150 },
  { name: 'Wed', a: 130, b: 90 },
  { name: 'Thu', a: 140, b: 122 },
  { name: 'Fri', a: 150, b: 110 },
  { name: 'Sat', a: 150, b: 110 },
  { name: 'Sun', a: 140, b: 170 }];

const ABTestingAnalytics = ({ dir, themeName }) => {
  const { t } = useTranslation('common');

  return (
    <Panel md={12} lg={12} xl={12} title={t('online_marketing_dashboard.ab_testing')}>
      <div dir="ltr">
        <ResponsiveContainer height={250} className="dashboard__area">
          <AreaChart data={data} margin={{ top: 20, left: -15, bottom: 20 }}>
            <XAxis dataKey="name" tickLine={false} reversed={dir === 'rtl'} />
            <YAxis tickLine={false} orientation={dir === 'rtl' ? 'right' : 'left'} />
            <Tooltip {...getTooltipStyles(themeName, 'defaultItems')} />
            <Legend />
            <CartesianGrid />
            <Area name="Last week" type="monotone" dataKey="a" fill="#4ce1b6" stroke="#4ce1b6" fillOpacity={0.2} />
            <Area name="Current Week" type="monotone" dataKey="b" fill="#70bbfd" stroke="#70bbfd" fillOpacity={0.2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
};

ABTestingAnalytics.propTypes = {
  dir: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(ABTestingAnalytics);
