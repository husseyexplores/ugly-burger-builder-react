import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Button.css';

class Button extends Component {
  render() {
    return (
      <button
        className={[classes.Button, classes[this.props.btnType]].join(' ')}
        onClick={this.props.clicked}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  btnType: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
