import React, { useState } from 'react';
import {
  Card, Col, Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';
import classnames from 'classnames';
import showResults from '../../../../utils/showResults';
import ProductAdd from './ProductsListIndex';
import MenuDetails from './MenuAdd';

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('1');
  

  const handleToggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <Col md={12} lg={12} xl={600}>
      <Card>
        <div className="profile__card tabs tabs--bordered-bottom">
          <div className="tabs__wrap">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => handleToggle('1')}
                >
                  Products
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => handleToggle('2')}
                >
                  
                  Menu Details
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <ProductAdd />
              </TabPane>
              <TabPane tabId="2">
                <MenuDetails onSubmit={showResults} />
              </TabPane>
            </TabContent>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ProfileTabs;
