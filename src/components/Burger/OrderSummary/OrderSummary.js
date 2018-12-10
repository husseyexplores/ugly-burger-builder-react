import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import Aux from '../../../hoc/Auxx/Auxx';
import Button from '../../UI/Button/Button';
import classes from './OrderSummary.css';

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      if (this.props.ingredients[igKey] == 0) return;
      return (
        <li key={igKey} className={classes.IngredientWrapper}>
          <span className={classes.IngredientName}>{igKey}:</span>{' '}
          <span className={classes.IngredientQty}>
            <span style={{ fontSize: '1.2rem' }}>x</span>
            {this.props.ingredients[igKey]}
          </span>
        </li>
      );
    });

    return (
      <div className={classes.OrderSummary}>
        <h3>Your Order</h3>
        <p>A delicious burger with the follwoing ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: ${this.props.burgerPrice.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout</p>
        <Button btnType="Cancel" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </div>
    );
  }
}

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  burgerPrice: PropTypes.number.isRequired,
  purchaseCancelled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired,
};

export default OrderSummary;
