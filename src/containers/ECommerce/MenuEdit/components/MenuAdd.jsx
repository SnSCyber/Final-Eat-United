import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'reactstrap';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';

import renderSelectField from '../../../../shared/components/form/Select';

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
          <span className="material-form__label">Menu Name</span>
          <Field
            name="menuname"
            component={renderTextField}
            placeholder="Name"
          />
        </div>
        <div>
          <span className="material-form__label">Select the Restaurant</span>
          <Field
            name="restaurant"
            component={renderSelectField}
            options={[
              { value: 'one', label: 'Top Restaurant and Bar' },
              { value: 'two', label: 'Neptune’s Coffee Shop' },
            ]}
          />
        </div>
        <ButtonToolbar className="form__button-toolbar">
          <Button color="primary" type="submit">Save</Button>
          <Button type="button" onClick={form.reset}>
            Cancel
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
