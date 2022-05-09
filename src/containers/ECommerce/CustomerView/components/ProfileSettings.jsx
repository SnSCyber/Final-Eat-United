import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'reactstrap';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';

const renderTextField = ({
  input, label, meta: { touched, error },
}) => (
  <TextField
    className="material-form__field"
    label={label}
    error={touched && error}
    value={input.value}
    onChange={(e) => {
      e.preventDefault();
      input.onChange(e.target.value);
    }}
  />
);

renderTextField.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

renderTextField.defaultProps = {
  meta: null,
  label: '',
};

const ProfileSettings = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit, form }) => (
      <form className="material-form" onSubmit={handleSubmit}>
        <div>
          <span className="material-form__label">CUSTOMER NAME</span>
          <Field
            name="username"
            component={renderTextField}
            placeholder="Larry Boom"
          />
        </div>
        <div>
          <span className="material-form__label">EMAIL ADDRESS</span>
          <Field
            name="email"
            component={renderTextField}
            placeholder="example@mail.com"
            type="email"
          />
        </div>
        <div>
          <span className="material-form__label">PHONE NUMBER</span>
          <Field
            name="phonenumber"
            component={renderTextField}
            type="text"
          />
        </div>
        <div>
          <span className="material-form__label">HOME ADDRESS</span>
          <Field
            name="homeaddress"
            component={renderTextField}
            type="text"
          />
        </div>

        <ButtonToolbar className="form__button-toolbar">
          <Button color="primary" type="submit">Update profile</Button>
          <Button type="button" onClick={form.reset}>
            Cancel
          </Button>
          <Button type="button" onClick={form.reset}>
            Delete
          </Button>
        </ButtonToolbar>
      </form>
    )}
  </Form>
);

ProfileSettings.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ProfileSettings;
