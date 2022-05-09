import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, Form } from 'react-final-form';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import { NavLink } from 'react-router-dom';
import { Alert, Button } from 'reactstrap';
import PasswordField from '../../../shared/components/form/Password';
import renderCheckBoxField from '../form/CheckBox';

const LogInFormPhoto = ({
  onSubmit, errorMessage, errorMsg, fieldUser, typeFieldUser, form,
}) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit }) => (
      <form className="form login-form" onSubmit={handleSubmit}>
        <Alert color="danger" isOpen={!!errorMessage || !!errorMsg}>
          {errorMessage}
          {errorMsg}
        </Alert>
        
        <div className="account__btns">
          <Button className="account__btn" type="submit" color="primary">Sign In</Button>
          {/* <NavLink className="btn btn-outline-primary account__btn" to="/register">Create
            Account
    </NavLink> */}
        </div>
      </form>
    )}
  </Form>
);

LogInFormPhoto.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  errorMsg: PropTypes.string,
  fieldUser: PropTypes.string,
  typeFieldUser: PropTypes.string,
  form: PropTypes.string.isRequired,
};

LogInFormPhoto.defaultProps = {
  errorMessage: '',
  errorMsg: '',
  fieldUser: 'Username',
  typeFieldUser: 'text',
};

export default connect(state => ({
  errorMsg: state.user.error,
}))(LogInFormPhoto);
