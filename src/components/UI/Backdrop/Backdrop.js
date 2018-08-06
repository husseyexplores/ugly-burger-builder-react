import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Backdrop.css';

class Backdrop extends Component {
  render() {
    return this.props.show ? (
      <div className={classes.Backdrop} onClick={this.props.clicked} />
    ) : null;
  }
}

Backdrop.propTypes = {
  show: PropTypes.any,
  clicked: PropTypes.func.isRequired,
};

Backdrop.defaultProps = {
  show: null,
};

export default Backdrop;
