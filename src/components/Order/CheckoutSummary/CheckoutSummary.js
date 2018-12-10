import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './CheckoutSummary.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

class CheckoutSummary extends Component {
  render() {
    return (
      <div className={classes.CheckoutSummary}>
        <h1 className={classes.HeadingMain}>We hope it tastes well!</h1>
        <div className={classes.BurgerWrapper}>
          <Burger ingredients={this.props.ingredients} />
        </div>
        <div className={classes.ButtonsWrapper}>
          <Button btnType="Cancel" clicked={this.props.checkoutCancelled}>
            Cancel
          </Button>
          <Button btnType="Success" clicked={this.props.checkoutContinued}>
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
