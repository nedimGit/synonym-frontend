import React, { Component } from 'react';


import '../styles/input.scss';

export default class Button extends Component {
  render() {
    const { text, disabled, type, className, IconComponent, onClick } = this.props;

    return (
      <button disabled={disabled} type={type || 'submit'} className={`btn ${className}`} onClick={onClick}>
        <div className="button-text noselect">
          {IconComponent && <IconComponent />}
          {text}
        </div>
      </button>
    );
  }
}

