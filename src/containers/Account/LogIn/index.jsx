import React from 'react';
import PropTypes from 'prop-types';
import withAuthFirebase from '../../../shared/components/auth/withAuthFirebase';
import LogInForm from '../../../shared/components/loginForm/LogInForm';
import showResults from '../../../utils/showResults';
import dillas from './dillas.jpg';


const divStyle = {
  width: '100%',
  backgroundImage: `url(${dillas})`,
  backgroundSize: 'cover',
};


const LogIn = ({ changeIsOpenModalFireBase }) => (
  <div style={divStyle}>
    <div className="account account--not-photo">
      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__head">
            <h3 className="account__title">Welcome to
              <div className="topbar__logo"> </div>
            </h3>
          </div>
          <LogInForm
            onSubmit={showResults}
            form="log_in_form"
          />             
        </div>
      </div>
    </div>
  </div>
);

LogIn.propTypes = {
  changeIsOpenModalFireBase: PropTypes.func.isRequired,
};

export default withAuthFirebase(LogIn);
