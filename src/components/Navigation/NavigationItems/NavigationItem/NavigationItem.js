import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

class NavigationItem extends Component {
  render() {
    return (
      <li className={classes.NavigationItem}>
        <NavLink
          to={this.props.link}
          exact={this.props.exact}
          activeClassName={classes.active}
        >
          {this.props.children}
        </NavLink>
      </li>
    );
  }
}

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default NavigationItem;
