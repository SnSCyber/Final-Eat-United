import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TopbarProfile from '../components/topbar/TopbarProfile';
import TopbarNotification from '../components/topbar/TopbarNotification';
import TopbarSearch from '../components/topbar/TopbarSearch';
import TopbarSidebarButton from '../components/topbar/TopbarSidebarButton';

const Topbar = ({
  changeMobileSidebarVisibility, changeSidebarVisibility,
}) => (
  <div className="topbar">
    <div className="topbar__left">
      <TopbarSidebarButton
        onClickMobile={changeMobileSidebarVisibility}
        onClickDesktop={changeSidebarVisibility}
      />
      <Link
        className="topbar__logo"
        to={{ pathname: 'https://eatatunited.com.na/main/home.php' }}
        target="_blank"
      />
    </div>
    <div className="topbar__right">
      <div className="topbar__right-over">
        <TopbarProfile />
      </div>
    </div>
  </div>
);

Topbar.propTypes = {
  changeMobileSidebarVisibility: PropTypes.func.isRequired,
  changeSidebarVisibility: PropTypes.func.isRequired,
};

export default Topbar;
