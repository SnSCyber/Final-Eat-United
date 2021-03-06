import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, Form } from 'react-final-form';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import renderCheckBoxField from '../../../../shared/components/form/CheckBox';
import PasswordField from '../../../../shared/components/form/Password';

const HorizontalForm = ({ onSubmit }) => {
  const { t } = useTranslation('common');
  return (
    <Col xs={12} md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('forms.form_layouts.horizontal_form')}</h5>
            <h5 className="subhead">Labels are left from fields</h5>
          </div>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit, form }) => (
              <form className="form form--horizontal" onSubmit={handleSubmit}>
                <div className="form__form-group">
                  <span className="form__form-group-label">Username</span>
                  <div className="form__form-group-field">
                    <Field
                      name="username"
                      component="input"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">E-mail</span>
                  <div className="form__form-group-field">
                    <Field
                      name="email"
                      component="input"
                      type="email"
                      placeholder="example@mail.com"
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">Url</span>
                  <div className="form__form-group-field">
                    <Field
                      name="url"
                      component="input"
                      type="text"
                      placeholder="https://themeforest.net"
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">Password</span>
                  <div className="form__form-group-field">
                    <Field
                      name="password"
                      component={PasswordField}
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <div className="form__form-group-field">
                    <Field
                      name="remember_me_horizontal"
                      component={renderCheckBoxField}
                      label="Remember me"
                      type="checkbox"
                    />
                  </div>
                </div>
                <ButtonToolbar className="form__button-toolbar">
                  <Button color="primary" type="submit">Submit</Button>
                  <Button type="button" onClick={form.reset}>
                    Cancel
                  </Button>
                </ButtonToolbar>
              </form>
            )}
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

HorizontalForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default HorizontalForm;
