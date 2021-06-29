import React, { Component } from 'react';
import { connect } from 'react-redux';
import BasicInput from '../components/input/basic-input';
import Button from '../../../common/form/components/button';
import { Field, reduxForm, change } from 'redux-form';

import { FORMS } from '../../../common/constants';

import { formConstants } from '../constants/synonym';

class SynonymInputForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="settings" onSubmit={handleSubmit} noValidate>
        <Field
          id={formConstants.fields.SynonymnInput}
          name={formConstants.fields.WordsInput}
          component={BasicInput}
          placeholder={'Add Synonym'}
          label={'Add Synonym'}
          labelClass="f-secondary-dark defect-form__label"
          type="text"
        />

        <Button type="submit" className="btn-green btn-cube btn-small" text="Add New Synonym" />
      </form>
    );
  }
}

SynonymInputForm = reduxForm({
  form: FORMS.synonymInputForm,
  enableReinitialize: true,
})(SynonymInputForm);

const mapStateToProps = state => {
  return {
    initialValues: {},
  };
};
const mapDispatchToProps = dispatch => ({
  changeField: (field, value) => dispatch(change(FORMS.synonymInputForm, field, value)),
});

SynonymInputForm = connect(mapStateToProps, mapDispatchToProps)(SynonymInputForm);
export default SynonymInputForm;
