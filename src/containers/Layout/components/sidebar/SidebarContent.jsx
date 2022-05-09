import React from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

const SidebarContent = ({
  onClick, changeToLight, changeToDark, sidebarCollapse,
}) => (
  <div className="sidebar__content">
    <ul className="sidebar__block">
      <SidebarLink
        title="Dashboard"
        icon="home"
        route="/e_commerce_dashboard"
        onClick={onClick}
      />
      <SidebarLink
        title="Restaurants"
        icon="store"
        route="/e-commerce/restaurants_list"
        onClick={onClick}
      />
      <SidebarLink
        title="Customers"
        icon="users"
        route="/e-commerce/customers_list"
        onClick={onClick}
      />
      <SidebarLink
        title="Products"
        icon="coffee-cup"
        route="/e-commerce/products_list"
        onClick={onClick}
      />
      <SidebarLink
        title="Coupons"
        icon="gift"
        route="/e-commerce/coupons_list"
        onClick={onClick}
      />
      <SidebarLink
        title="Reviews"
        icon="smile"
        route="/e-commerce/reviews_list"
        onClick={onClick}
      />
      <SidebarLink
        title="Gallery"
        icon="picture"
        route="/default_pages/gallery"
        onClick={onClick}
      />
      <SidebarLink
        title="Banner Management"
        icon="flag"
        route="/e-commerce/banners_list"
        onClick={onClick}
      />
      <SidebarCategory title="Theme" icon="layers" sidebarCollapse={sidebarCollapse}>
        <button className="sidebar__link" type="button" onClick={changeToLight}>
          <p className="sidebar__link-title">Light Theme</p>
        </button>
        <button className="sidebar__link" type="button" onClick={changeToDark}>
          <p className="sidebar__link-title">Dark Theme</p>
        </button>
      </SidebarCategory>
     
    </ul>
    <ul className="sidebar__block">
    <SidebarLink title="Create User" icon="user" route="/register" />
    <SidebarLink title="Log Out" icon="exit" route="/log_in" />      
    </ul>
    
  </div>
);

SidebarContent.propTypes = {
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  sidebarCollapse: PropTypes.bool,
};

SidebarContent.defaultProps = {
  sidebarCollapse: false,
  onClick: () => {},
};

export default SidebarContent;
