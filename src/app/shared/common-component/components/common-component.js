import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/common-component.scss';

class CommonComponent extends Component {
  componentDidMount = () => {};

  componentDidUpdate = () => {};

  render() {
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        currentPath: this.props.currentPath,
      })
    );

    return <div className="common-component-container">{childrenWithProps}</div>;
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CommonComponent);
