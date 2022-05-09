import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import RegisterForm from '../../../shared/components/login_register/LoginRegisterForm';
import showResults from '../../../utils/showResults';
import test from '../../../utils/api/base/test';
import post from '../../../utils/api/base/post';
import LogoLight from '../img';

const auth = getAuth();

const RegisterPhoto = ({ history }) => {
  const [error, setError] = useState('');
   

  const registerFireBase = (user) => {
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(() => {
        history.push('/log_in');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const postData = () => {
    axios.post('http://localhost/api-calls/register.php', showResults);
};

  return (
    <div className="account account--photo">
      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__head">
            <h3 className="account__title">Welcome to  
              <LogoLight />
            </h3>
            <h4 className="account__subhead subhead">Create an account</h4>
          </div>
          <RegisterForm onSubmit={registerFireBase} errorMessage={error} />
          <div className="account__have-account">
            <p>Already have an account? <NavLink to="/log_in">Login</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  );
};

RegisterPhoto.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(RegisterPhoto);
