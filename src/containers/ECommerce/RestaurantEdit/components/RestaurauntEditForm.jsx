import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'reactstrap';
import { Field, Form } from 'react-final-form';
import CurrencyUsdIcon from 'mdi-react/CurrencyUsdIcon';
import TagIcon from 'mdi-react/TagIcon';
import renderDropZoneMultipleField from '../../../../shared/components/form/DropZoneMultiple';
import renderSelectField from '../../../../shared/components/form/Select';

const RestaurauntEditForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit, form }) => (
      <form 
        className="form product-edit" 
        onSubmit={(event) => {
      const promise = handleSubmit(event);
      return promise && promise.then(() => {
      form.reset();
  });
    }}>
        <div className="form__half">
          <div className="form__form-group">
            <span className="form__form-group-label">Restaurant Name</span>
            <div className="form__form-group-field">
              <Field
                name="name"
                component="input"
                type="text"
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Restaurant Address</span>
            <div className="form__form-group-field">
              <Field
                name="address"
                component="input"
                type="text"
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Google Maps Link</span>
            <div className="form__form-group-field">
              <Field
                name="maps"
                component="input"
                type="text"
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Restaurant Phone No.</span>
            <div className="form__form-group-field">
              <Field
                name="phone"
                component="input"
                type="phonenumber"
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Restaurant Email Address</span>
            <div className="form__form-group-field">
              <Field
                name="email"
                component="input"
                type="email"
              />
            </div>
          </div>
          
          <div className="form__form-group">
            <span className="form__form-group-label">Restaurant Description</span>
            <div className="form__form-group-field">
              <Field
                name="description"
                component="input"
                type="text"
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Pick Up</span>
            <div className="form__form-group-field">
              <Field
                name="pickup"
                placeholder="yes or no"
                component="input"
                type="text"
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Delivery</span>
            <div className="form__form-group-field">
              <Field
                name="delivery"
                placeholder="yes or no"
                component="input"
                type="text"
              />
            </div>
          </div>
          <div className="card__title">
            <h5 className="bold-text">Other Details</h5>
          </div>
          <div className="form form--horizontal">
            <div className="form__form-group">
              <span className="form__form-group-label">Manager Name</span>
              <div className="form__form-group-field">
                <Field
                  name="manager"
                  component="input"
                  type="text"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Opening Times</span>
              <div className="form__form-group-field">
                <Field
                  name="openingTime"
                  component="input"
                  type="text"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Closing Times</span>
              <div className="form__form-group-field">
                <Field
                  name="closingTime"
                  component="input"
                  type="text"
                />
              </div>
            </div>
          </div>
          <ButtonToolbar className="form__button-toolbar">
            <Button color="primary" type="submit">Save</Button>
            <Button type="button" onClick={form.reset}>Cancel</Button>
          </ButtonToolbar>
        </div>
        
      </form>
    )}
  </Form>
);

RestaurauntEditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RestaurauntEditForm;
