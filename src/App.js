import React, { Component } from 'react';
import { connect } from 'react-redux';

import Helpers from './common/helpers';

import { FAVICON } from './common/constants';

import './common/styles/app.scss';

class App extends Component {
  componentDidMount() {
    Helpers.setFavicon(FAVICON);
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        currentPath: this.props.currentPath,
      })
    );
    return (
      <div className="main-container">
        <div className="main-container__content">{childrenWithProps}</div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.userReducer,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
