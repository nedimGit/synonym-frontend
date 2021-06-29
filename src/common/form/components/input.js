import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/input.scss';

export default class CustomInput extends Component {
  render() {
    const { t } = this.context;
    const { input, type, placeholder, meta, className, id, label, labelClass, disabled, isHidden, max, autoFocus } = this.props;
    return (
      <div className={`field-wrapper${disabled ? ' field-wrapper--disabled' : ''} ${isHidden ? 'hidden-field' : ''}`}>
        {label && (
          <label className={`field-wrapper__label ${labelClass || ''}`} htmlFor={id}>
            {t(label)}
          </label>
        )}
        <div className="input-wrapper">
          <input
            id={id}
            disabled={disabled}
            readOnly={disabled}
            {...input}
            max={max}
            type={type || 'text'}
            autoCorrect="off"
            spellCheck={false}
            placeholder={placeholder ? t(placeholder) : ''}
            className={(meta && meta.error && meta.touched ? 'invalid ' : '') + `${className || 'input-wrapper__input'}`}
            autoFocus={autoFocus || false}
          />
          <div className={`error-message${meta && meta.error && meta.touched ? '--visible' : ''}`}>{meta && meta.error && t(meta.error)}</div>
        </div>
      </div>
    );
  }
}

CustomInput.contextTypes = {
  t: PropTypes.func.isRequired,
};
