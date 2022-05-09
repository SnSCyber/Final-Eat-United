import React, { useState } from 'react';
import {
  Card, CardBody, Col, ButtonToolbar,
} from 'reactstrap';
import HeartIcon from 'mdi-react/HeartIcon';
import StarIcon from 'mdi-react/StarIcon';
import StarOutlineIcon from 'mdi-react/StarOutlineIcon';
import { Link } from 'react-router-dom';
import RestaurantGallery from './RestaurantGallery';
import images from './imgs';
import RestaurantTabs from './RestaurantTabs';
import ColorSelect from './ColorSelect';

const RestaurantCard = () => {
  const [color, setColor] = useState('white');

  const onLike = () => {
    if (color === 'white') {
      setColor('#70bbfd');
    } else {
      setColor('white');
    }
  };

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="restaurant-card">
            <RestaurantGallery images={images} />
            <div className="restaurant-card__info">
              <h3 className="restaurant-card__title">French bulldog pillow</h3>
              <div className="restaurant-card__rate">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarOutlineIcon />
                <a className="restaurant-card__link" href="/easydev/e-commerce/restaurant_page">See all reviews</a>
              </div>
              <h1 className="restaurant-card__price">$17.19 <span className="restaurant-card__old-price">$N23</span></h1>
              <p className="typography-message">
                Knowledge nay estimable questions repulsive daughters boy. Solicitude gay way unaffected expression
                for. His mistress ladyship required off horrible disposed rejoiced. Unpleasing pianoforte unreserved
                as oh he unpleasant no inquietude insipidity. Advantages can discretion possession add favourable
                cultivated admiration far.
              </p>
              <form className="form restaurant-card__form">
                <div className="form__form-group">
                  <span className="form__form-group-label restaurant-card__form-label">Select Color</span>
                  <div className="form__form-group-field">
                    <ColorSelect options={[
                      { value: 'Pink Sugar', label: 'Pink Sugar', color: '#f7a9c4' },
                      { value: 'Pink Sugar', label: 'Pink Sugar', color: '#f7a9c4' },
                      { value: 'Pink Sugar', label: 'Pink Sugar', color: '#f7a9c4' },
                    ]}
                    />
                  </div>
                </div>
                <ButtonToolbar className="restaurant-card__btn-toolbar">
                  <Link className="btn btn-primary" to="/e-commerce/cart">Add to cart</Link>
                  <button
                    className="restaurant-card__wish-btn"
                    type="button"
                    onClick={onLike}
                  >
                    <HeartIcon color={color} />Add to wishlist
                  </button>
                </ButtonToolbar>
              </form>
              <RestaurantTabs />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RestaurantCard;
