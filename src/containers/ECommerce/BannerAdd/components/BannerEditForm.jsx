import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'reactstrap';
import { Field, Form } from 'react-final-form';
import CurrencyUsdIcon from 'mdi-react/CurrencyUsdIcon';
import TagIcon from 'mdi-react/TagIcon';
import renderDropZoneMultipleField from '../../../../shared/components/form/DropZoneMultiple';
import renderSelectField from '../../../../shared/components/form/Select';
import RestaurantData from '../../RestaurantsList/restData';

const BannerEditForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit, form }) => (
      <form className="form Banner-edit" onSubmit={handleSubmit}>
        <div className="form__half">
          <div className="form__form-group">
            <span className="form__form-group-label">Banner Name</span>
            <div className="form__form-group-field">
              <Field
                name="name"
                component="input"
                type="text"
              />
            </div> 
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Status</span>
            <div className="form__form-group-field">
              <Field
                name="status"
                component="input"
                type="text"
              />
            </div> 
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Full Description</span>
            <div className="form__form-group-field">
              <Field
                name="full_description"
                component="textarea"
                type="text"
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Existing Restaurants</span>
            <div className="form__form-group-field">
              <RestaurantData />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Restaurant ID</span>
            <div className="form__form-group-field">
              <Field
                name="rest_id"
                component="input"
                type="text"
              />
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

BannerEditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default BannerEditForm;
