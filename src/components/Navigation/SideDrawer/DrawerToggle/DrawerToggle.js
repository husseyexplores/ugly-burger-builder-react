import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './DrawerToggle.css';

class DrawerToggle extends Component {
  render() {
    return (
      <div onClick={this.props.clicked} className={classes.DrawerToggle}>
        <div />
        <div />
        <div />
      </div>
    );
  }
}

DrawerToggle.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default DrawerToggle;
