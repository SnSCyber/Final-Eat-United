import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import NotificationsIcon from 'mdi-react/NotificationsIcon';

const notifications = [
 
];

const TopbarNotification = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const collapseNotification = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="topbar__collapse">
      <button className="topbar__btn" type="button" onClick={collapseNotification}>
        <NotificationsIcon />
      </button>
      {isCollapsed && (
        <button
          className="topbar__back"
          aria-label="topbar__back"
          type="button"
          onClick={collapseNotification}
        />
      )}
      <Collapse
        isOpen={isCollapsed}
        className="topbar__collapse-content"
      >
        <div className="topbar__collapse-title-wrap">
          <p className="topbar__collapse-title">Notifications</p>
          <button className="topbar__collapse-button" type="button">Mark all as read</button>
        </div>
        {notifications.map(notification => (
          <div className="topbar__collapse-item" key={notification.id}>
            <div className="topbar__collapse-img-wrap">
              <img className="topbar__collapse-img" src={notification.ava} alt="" />
            </div>
            <p className="topbar__collapse-message">
              <span className="topbar__collapse-name">{notification.name}</span>
              {notification.message}
            </p>
            <p className="topbar__collapse-date">{notification.date}</p>
          </div>
        ))}
        <Link className="topbar__collapse-link" to="/e-commerce/orders_list" onClick={collapseNotification}>
          See all notifications
        </Link>
      </Collapse>
    </div>
  );
};

export default TopbarNotification;
