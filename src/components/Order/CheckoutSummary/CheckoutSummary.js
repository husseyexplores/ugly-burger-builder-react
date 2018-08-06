import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './CheckoutSummary.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

class CheckoutSummary extends Component {
  render() {
    return (
      <div className={classes.CheckoutSummary}>
        <h1 style={{ marginBottom: '-200px' }}>We hope it tastes well!</h1>
        <div style={{ margin: 'auto', transform: 'scale(0.5)' }}>
          <Burger ingredients={this.props.ingredients} />
        </div>
        <div style={{ marginTop: '-120px' }}>
          <Button btnType="Cancel" clicked>
            Cancel
          </Button>
          <Button btnType="Success" clicked>
            Continue
          </Button>
        </div>
      </div>
    );
  }
}

CheckoutSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
};

export default CheckoutSummary;
