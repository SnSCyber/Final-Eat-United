import React, { useState } from 'react';
import {
  Card, Col, Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';
import classnames from 'classnames';
import showResults from '../../../../utils/showResults';
import ProfileTimeLine from '../../../../shared/components/ProfileTimeLine';
import ProfileActivities from './ProfileActivities';
import ProfileSettings from './ProfileSettings';

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('1');
  const initialValues = {
    username: '',
    email: '',
  };

  const handleToggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <Col md={12} lg={12} xl={8}>
      <Card>
        <div className="profile__card tabs tabs--bordered-bottom">
          <div className="tabs__wrap">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => handleToggle('1')}
                >
                  Customer Details
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => handleToggle('2')}
                >
                  Order History
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="2">
                <ProfileActivities />
              </TabPane>
              <TabPane tabId="1">
                <ProfileSettings onSubmit={showResults} initialValues={initialValues} />
              </TabPane>
            </TabContent>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ProfileTabs;
