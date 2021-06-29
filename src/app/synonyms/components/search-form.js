import React, { Component } from 'react';
import { connect } from 'react-redux';
import BasicInput from './input/basic-input';
import { Field, reduxForm, change } from 'redux-form';

import { FORMS } from '../../../common/constants';

import { formConstants } from '../constants/synonym';

class SearchWordForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="form" onSubmit={handleSubmit} noValidate>
        <Field
          id={formConstants.fields.SearchWord}
          name={formConstants.fields.WordsInput}
          component={BasicInput}
          placeholder={'Search Word'}
          label={'Search words'}
          labelClass="f-secondary-dark defect-form__label"
          type="text"
        />
      </form>
    );
  }
}

SearchWordForm = reduxForm({
  form: FORMS.searchWordForm,
  enableReinitialize: true,
})(SearchWordForm);

const mapStateToProps = state => {
  return {
    initialValues: {},
  };
};
const mapDispatchToProps = dispatch => ({
  changeField: (field, value) => dispatch(change(FORMS.searchWordForm, field, value)),
});

SearchWordForm = connect(mapStateToProps, mapDispatchToProps)(SearchWordForm);
export default SearchWordForm;
