import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import AlternateEmailIcon from 'mdi-react/AlternateEmailIcon';
import { Button, Alert } from 'reactstrap';

const ResetPasswordForm = ({
  onSubmit, fieldUser, errorMessage, successMessage
}) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit }) => (
      <form className="form reset-password-form" onSubmit={handleSubmit}>
        <Alert
          color="danger"
          isOpen={!!errorMessage}
        >
          {errorMessage}
        </Alert>

        <Alert
          color="success"
          isOpen={!!successMessage}
        >
          {successMessage}
        </Alert>
        <div className="form__form-group">
          <div>
            <span className="form__form-group-label">{fieldUser}</span>
          </div>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AlternateEmailIcon />
            </div>
            <Field
              name="email"
              id="email"
              component="input"
              type="email"
              placeholder="example@mail.com"
              className="input-without-border-radius"
            />
          </div>
        </div>
        <Button className="account__btn" color="primary">
          Reset Password
        </Button>
      </form>
    )}
  </Form>
);

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  fieldUser: PropTypes.shape(),
};

ResetPasswordForm.defaultProps = {
  fieldUser: null,
};

ResetPasswordForm.defaultProps = {
  errorMessage: '', 
};

ResetPasswordForm.defaultProps = {
  successMessage: '', 
};

export default ResetPasswordForm;
