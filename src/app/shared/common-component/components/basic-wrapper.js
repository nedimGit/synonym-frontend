import React from 'react';
import { ReactComponent as Logo } from '../../../../common/assets/logo.svg';

import '../styles/main-wrapper.scss';

const BasicWrapper = ({ children }) => {
  return (
    <div className="main-wrapper">
      <div className="main-wrapper__background-image">
        <div className="generic-container">
          <div className="logo">
            <Logo />
          </div>
          <div className="generic-container__wrapper">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BasicWrapper;
