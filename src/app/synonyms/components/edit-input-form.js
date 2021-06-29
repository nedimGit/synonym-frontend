import React, { Component } from 'react';
import { connect } from 'react-redux';
import BasicInput from '../components/input/basic-input';
import Button from '../../../common/form/components/button';
import { Field, reduxForm, change } from 'redux-form';

import { FORMS } from '../../../common/constants';

import { formConstants } from '../constants/synonym';

class EditInputForm extends Component {
  render() {
    const { handleSubmit, selectedWord } = this.props;

    let placeholder = selectedWord ? selectedWord.Word : 'Select word to edit';
    return (
      <form className="settings" onSubmit={handleSubmit} noValidate>
        <Field
          id={formConstants.fields.EditInputForm}
          name={formConstants.fields.WordsInput}
          component={BasicInput}
          placeholder={placeholder}
          label={'Edit Word'}
          labelClass="f-secondary-dark defect-form__label"
          type="text"
        />
        <Button type="submit" className="btn-green btn-cube btn-small" text="Edit Word" />
      </form>
    );
  }
}

EditInputForm = reduxForm({
  form: FORMS.editInputForm,
  enableReinitialize: true,
})(EditInputForm);

const mapStateToProps = state => {
  return {
    initialValues: {},
  };
};
const mapDispatchToProps = dispatch => ({
  changeField: (field, value) => dispatch(change(FORMS.editInputForm, field, value)),
});

EditInputForm = connect(mapStateToProps, mapDispatchToProps)(EditInputForm);
export default EditInputForm;
