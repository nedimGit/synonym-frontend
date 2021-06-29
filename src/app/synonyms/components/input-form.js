import React, { Component } from 'react';
import { connect } from 'react-redux';
import BasicInput from '../components/input/basic-input';
import Button from '../../../common/form/components/button';
import { Field, reduxForm, change } from 'redux-form';

import { FORMS } from '../../../common/constants';

import { formConstants } from '../constants/synonym';

class WordInputForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="settings" onSubmit={handleSubmit} noValidate>
        <Field
          id={formConstants.fields.WordsInput}
          name={formConstants.fields.WordsInput}
          component={BasicInput}
          placeholder={'Add Word'}
          label={'Add word'}
          labelClass="f-secondary-dark defect-form__label"
          type="text"
        />
        <Button type="submit" className="btn-green btn-cube btn-small" text="Add New Word" />
      </form>
    );
  }
}

WordInputForm = reduxForm({
  form: FORMS.wordInputForm,
  enableReinitialize: true,
})(WordInputForm);

const mapStateToProps = state => {
  return {
    initialValues: {},
  };
};
const mapDispatchToProps = dispatch => ({
  changeField: (field, value) => dispatch(change(FORMS.wordInputForm, field, value)),
});

WordInputForm = connect(mapStateToProps, mapDispatchToProps)(WordInputForm);
export default WordInputForm;
