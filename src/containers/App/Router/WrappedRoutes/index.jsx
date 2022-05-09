import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../../../Layout/index';
import Commerce from './Commerce';
import OnLineMarketingDashboard from '../../../Dashboards/OnLineMarketing/index';
import Account from './Account';
import ECommerce from './ECommerce';
import DefaultPages from './DefaultPages';

export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Switch>
      <Route exact path="/e_commerce_dashboard" component={Commerce} />
      <Route path="/online_marketing_dashboard" component={OnLineMarketingDashboard} />
      <Route path="/account" component={Account} />
      <Route path="/e-commerce" component={ECommerce} />
      <Route path="/default_pages" component={DefaultPages} />
      </Switch>
    </div>
  </div>
);
