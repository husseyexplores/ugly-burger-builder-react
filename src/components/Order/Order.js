import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Order.css';

class Order extends Component {
  render() {
    const ingredients = [];

    for (let ingredientName in this.props.ingredients) {
      if (this.props.ingredients[ingredientName] == 0) continue;
      ingredients.push({
        amount: this.props.ingredients[ingredientName],
        name: ingredientName,
      });
    }

    const ingredientOutput = ingredients.map(ig => {
      return (
        <span key={ig.name} className={classes.IngredientWrapper}>
          {' '}
          <span className={classes.IngredientName}>{ig.name}</span>{' '}
          <span className={classes.IngredientQty}>{ig.amount}</span>
        </span>
      );
    });

    return (
      <div className={classes.Order}>
        <p style={{ marginBottom: '1.6rem' }}>
          <strong>Ingredients:</strong>
          {ingredientOutput}
        </p>
        <p>
          <strong>Price:</strong> USD ${this.props.price}
        </p>
      </div>
    );
  }
}

// Order.propTypes = {

// };

// Order.defaultProps = {

// };

export default Order;
