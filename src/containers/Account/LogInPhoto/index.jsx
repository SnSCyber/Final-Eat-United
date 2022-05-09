import React from 'react';
import PropTypes from 'prop-types';
import withAuthFirebase from '../../../shared/components/auth/withAuthFirebase';
import LogInFormPhoto from '../../../shared/components/loginPhotoForm/LogInFormPhoto';
import signInWithEmailAndPassword from '../../../shared/components/auth/firebase';
import showResults from '../../../utils/showResults';
import LogoLight from '../img';
import WrappedRoutes from '../../App/Router/WrappedRoutes';
import { Route} from 'react-router-dom';
import CouponList from '../../ECommerce/CouponsList/index';

const LogInPhoto = ({ changeIsOpenModalFireBase }) => (
  <div className="account account--photo">
    <div className="account__wrapper">
      <div className="account__card">
        <div className="account__head">
          <h3 className="account__title">Welcome to
            <LogoLight />
          </h3>
        </div>
        <LogInFormPhoto
          onSubmit={changeIsOpenModalFireBase}
          form="log_in_form"
        />
      </div>
    </div>
  </div>
);

LogInPhoto.propTypes = {
  changeIsOpenModalFireBase: PropTypes.func.isRequired,
};

export default withAuthFirebase(LogInPhoto);
