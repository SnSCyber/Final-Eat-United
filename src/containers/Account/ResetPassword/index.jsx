import React from 'react';
import { NavLink } from 'react-router-dom';
import showResults from '../../../utils/showResults';
import ResetPasswordForm from '../../../shared/components/reset_password/ResetPasswordForm';

const ResetPassword = props => (
  <div className="account account--not-photo">
    <div className="account__wrapper">
      <div className="account__card">
        <div className="account__head">
          <h3 className="account__title">Welcome to
            <div className="topbar__logo"> </div>
          </h3>
          <h4 className="account__subhead subhead">Password reset</h4>
        </div>
        <ResetPasswordForm
          {...props}
          onSubmit={showResults}
        />
        <div className="account__have-account">
          <p>Remember your password?  <NavLink to="/log_in">Login</NavLink></p>
        </div>
      </div>
    </div>
  </div>
);

export default ResetPassword;
