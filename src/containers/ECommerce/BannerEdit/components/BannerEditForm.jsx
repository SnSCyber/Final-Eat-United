import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'reactstrap';
import { Field, Form } from 'react-final-form';
import CurrencyUsdIcon from 'mdi-react/CurrencyUsdIcon';
import TagIcon from 'mdi-react/TagIcon';
import renderDropZoneMultipleField from '../../../../shared/components/form/DropZoneMultiple';
import renderSelectField from '../../../../shared/components/form/Select';

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
            <span className="form__form-group-label">Active</span>
            <div className="form__form-group-field">
              <Field
                name="active"
                component="input"
                type="text"
                placeholder="Yes or No"
              />
            </div> 
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Full description</span>
            <div className="form__form-group-field">
              <Field
                name="full_description"
                component="textarea"
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
