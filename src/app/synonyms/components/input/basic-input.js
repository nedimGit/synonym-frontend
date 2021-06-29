import React, { Component } from 'react';
import '../styles/basic-input.scss';

export default class BasicInput extends Component {
  handleChange = e => {
    const {
      input: { onChange },
      handleChange,
    } = this.props;
    onChange(e);
    if (handleChange) handleChange(e.target.value);
  };

  wheelListener = event => {
    if (document.activeElement.type === 'number') {
      document.activeElement.blur();
    }
  };

  componentDidMount = () => {
    document.addEventListener('wheel', this.wheelListener);
  };

  componentWillUnmount = () => {
    document.removeEventListener('wheel', this.wheelListener);
  };

  render() {
    const {
      input: { onChange, ...restInputProps },
      type,
      placeholder,
      meta,
      className,
      id,
      label,
      labelClass,
      disabled,
      hideBorder,
      isHidden,
      inputProps,
      renderPreComponent,
    } = this.props;
    const { t } = this.context;
    return (
      <div className={`word-input ${isHidden ? 'hidden-field' : ''}`}>
        {label && (
          <label className={`word-input__label ${labelClass || 'f-secondary-dark'}`} htmlFor={id}>
            {label}
          </label>
        )}
        <div className={`word-input__input-wrapper${hideBorder ? '' : ' border'}` + (meta && meta.error && meta.touched ? ' invalid ' : '')}>
          {renderPreComponent && renderPreComponent()}
          <input
            id={id}
            onChange={this.handleChange}
            {...inputProps}
            {...restInputProps}
            readOnly={disabled}
            disabled={disabled}
            type={type || 'text'}
            placeholder={placeholder || ''}
            className={(meta && meta.error && meta.touched ? 'invalid ' : '') + `${className || 'input f-primary'}`}
            autoComplete="off"
          />
        </div>
        <div className={`error-message${meta && meta.error && meta.touched ? '--visible' : ''}`}>{meta && meta.error && meta.touched && t(meta.error.string, meta.error.params)}</div>
      </div>
    );
  }
}

BasicInput.contextTypes = {
  // t: PropTypes.func.isRequired,
};
