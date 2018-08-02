import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControl.css';

class BuildControl extends Component {
  render() {
    const { BuildControl, Label, Less, More } = classes;

    return (
      <div className={BuildControl}>
        <div className={Label}>{this.props.label}</div>
        <button
          className={Less}
          onClick={this.props.removed}
          disabled={this.props.disabled}
        >
          Less
        </button>
        <button className={More} onClick={this.props.added}>
          More
        </button>
      </div>
    );
  }
}

BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
  removed: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  added: PropTypes.func.isRequired,
};

export default BuildControl;
