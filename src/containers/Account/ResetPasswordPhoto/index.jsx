import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import showResults from '../../../utils/showResults';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import ResetPasswordForm from '../../../shared/components/reset_password/ResetPasswordForm';
import LogoLight from '../img';

const auth = getAuth();

const ResetPasswordPhoto = ({ history }) => {
  const [error, setError] = useState('');
  const [success, setsuccess] = useState('');


const sendPasswordReset = (user) => {
  sendPasswordResetEmail(auth, user.email)
    .then((err) => {
      setsuccess("Password reset link sent, please check your email...");
    })
    .catch((err) => {
      setError("Please ensure this user has been registered");
    });
};


return (
  <div className="account account--photo">
  <div className="account__wrapper">
    <div className="account__card">
      <div className="account__head">
        <h3 className="account__title">Welcome to
          <LogoLight />
        </h3>
        <h4 className="account__subhead subhead">Password reset</h4>
      </div>
      <ResetPasswordForm
        onSubmit={sendPasswordReset} errorMessage={error} successMessage={success} 
      />
      <div className="account__have-account">
        <p>Remember your password?  <NavLink to="/log_in">Login</NavLink></p>
      </div>
    </div>
  </div>
</div>
);
};

ResetPasswordPhoto.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(ResetPasswordPhoto);

