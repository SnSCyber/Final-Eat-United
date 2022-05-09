import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from '../../../ECommerce/Cart/index';
import Catalog from '../../../ECommerce/Catalog/index';
import OrdersList from '../../../ECommerce/OrdersList/index';
import Payment from '../../../ECommerce/Payment/index';
import ProductEdit from '../../../ECommerce/ProductEdit/index';
import ProductView from '../../../ECommerce/ProductView/index';
import ProductPage from '../../../ECommerce/ProductPage/index';
import ProductsList from '../../../ECommerce/ProductsList/index';
import RestaurantsList from '../../../ECommerce/RestaurantsList/index';
import RestaurantEdit from '../../../ECommerce/RestaurantEdit/index';
import RestaurantView from '../../../ECommerce/RestaurantView/index';
import CustomersList from '../../../ECommerce/CustomersList/index';
import CustomersView from '../../../ECommerce/CustomerView/index';
import MenuList from '../../../ECommerce/MenusList/index';
import MenuAdd from '../../../ECommerce/MenuEdit/index';
import CouponList from '../../../ECommerce/CouponsList/index';
import CouponEdit from '../../../ECommerce/CouponEdit/index';
import CouponView from '../../../ECommerce/CouponView/index';
import ReviewsList from '../../../ECommerce/ReviewsList/index';
import BannersList from '../../../ECommerce/BannersList/index';
import BannerAdd from '../../../ECommerce/BannerAdd/index';
import BannerEdit from '../../../ECommerce/BannerEdit/components/BannerEditCard';
import BannerView from '../../../ECommerce/BannerView/index';
import BasicTables from '../../../Tables/BasicTables/index';



export default () => (
  <Switch>
    <Route path="/e-commerce/cart" component={Cart} />
    <Route path="/e-commerce/test" component={BasicTables} />
    <Route path="/e-commerce/catalog" component={Catalog} />
    <Route path="/e-commerce/orders_list" component={OrdersList} />
    <Route path="/e-commerce/payment" component={Payment} />
    <Route path="/e-commerce/product_add" component={ProductEdit} />
    <Route path="/e-commerce/product_view" component={ProductView} />
    <Route path="/e-commerce/product_page" component={ProductPage} />
    <Route path="/e-commerce/products_list" component={ProductsList} />
    <Route path="/e-commerce/restaurants_list" component={RestaurantsList} />
    <Route path="/e-commerce/restaurant_add" component={RestaurantEdit} />
    <Route path="/e-commerce/restaurant_view" component={RestaurantView} />
    <Route path="/e-commerce/customers_list" component={CustomersList} />
    <Route path="/e-commerce/customers_view" component={CustomersView} />
    <Route path="/e-commerce/menus_list" component={MenuList} />
    <Route path="/e-commerce/menus_add" component={MenuAdd} />
    <Route path="/e-commerce/coupons_list" component={CouponList} /> 
    <Route path="/e-commerce/coupon_add" component={CouponEdit} />  
    <Route path="/e-commerce/coupon_view" component={CouponView} />  
    <Route path="/e-commerce/reviews_list" component={ReviewsList} />    
    <Route path="/e-commerce/banners_list" component={BannersList} />
    <Route path="/e-commerce/banner_add" component={BannerAdd} />
    <Route path="/e-commerce/banner_edit/:id" component={BannerEdit} />
    <Route path="/e-commerce/banner_view" component={BannerView} />
  </Switch>
);
