import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'reactstrap';
import { Field, Form } from 'react-final-form';
import CurrencyUsdIcon from 'mdi-react/CurrencyUsdIcon';
import TagIcon from 'mdi-react/TagIcon';
import StoreIcon from 'mdi-react/StoreIcon';
import CoffeeCupIcon from 'mdi-react/CoffeeIcon';
import renderDropZoneMultipleField from '../../../../shared/components/form/DropZoneMultiple';
import renderSelectField from '../../../../shared/components/form/Select';

const ProductEditForm = ({ onSubmit }) => (
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
            <span className="form__form-group-label">Product Name</span>
            <div className="form__form-group-field">
              <Field
                name="name"
                component="input"
                type="text"
                allowNull="false"
              />
            </div>
          </div>
          <div className="form__form-group-id-category">
            <div className="form__form-group">
              <span className="form__form-group-label">
                Category
              </span>
              <div className="form__form-group-field">
                <Field
                  name="category"
                  component="input"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">
              Description <span dir="ltr">(255characters max)</span>
            </span>
            <div className="form__form-group-field">
              <Field
                name="description"
                component="input"
                type="text"
              />
            </div>
          </div>
          <div className="card__title">
            <h5 className="bold-text">Extras</h5>
          </div>
          <div className="form__form-group-price-discount">
            <div className="form__form-group form__form-group-price">
              <span className="form__form-group-label">Extra Options?</span>
              <div className="form__form-group-field">
                <Field
                  name="extra"
                  component="input"
                  type="text"
                  placeholder="yes or no"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Extra One</span>
              <div className="form__form-group-field">
                <Field
                  name="extra1"
                  component="input"
                  type="text"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Extra two</span>
              <div className="form__form-group-field">
                <Field
                  name="extra2"
                  component="input"
                  type="text"
                />
              </div>
              
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Extra three</span>
              <div className="form__form-group-field">
                <Field
                  name="extra3"
                  component="input"
                  type="text"
                />
              </div>
              
            </div>
          </div>
          <div className="card__title">
            <h5 className="bold-text">Pricing</h5>
          </div>
          <div className="form__form-group-price-discount">
            <div className="form__form-group form__form-group-price">
              <span className="form__form-group-label">Price N$</span>
              <div className="form__form-group-field">
                <Field
                  name="price"
                  component="input"
                  type="text"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Restauarant ID</span>
              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <StoreIcon />
                </div>
                <Field
                  name="restID"
                  component="input"
                  type="text"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Product Code</span>
              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <CoffeeCupIcon />
                </div>
                <Field
                  name="code"
                  component="input"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="card__title">
            <h5 className="bold-text">General information</h5>
          </div>
          <div className="form form--horizontal">
            <div className="form__form-group">
              <span className="form__form-group-label">Quantity</span>
              <div className="form__form-group-field">
                <Field
                  name="quantity"
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

ProductEditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ProductEditForm;
