import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BurgerTop from './BurgerIngredientAssets/BurgerTop';
import BurgerBottom from './BurgerIngredientAssets/BurgerBottom';
import BurgerTomatoes from './BurgerIngredientAssets/BurgerTomatoes';
import BurgerLettuce from './BurgerIngredientAssets/BurgerLettuce';
import BurgerGerkins from './BurgerIngredientAssets/BurgerGerkins';
import BurgerCheese from './BurgerIngredientAssets/BurgerCheese';
import BurgerBacon from './BurgerIngredientAssets/BurgerBacon';
import BurgerMeat from './BurgerIngredientAssets/BurgerMeat';

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case 'bread-bottom':
        ingredient = (
          <div className={classes.BreadBottom}>
            <BurgerBottom />
          </div>
        );
        break;
      case 'bread-top':
        ingredient = (
          <div className={classes.BreadTop}>
            <BurgerTop />
          </div>
        );
        break;
      case 'meat':
        ingredient = (
          <div className={classes.Meat}>
            <BurgerMeat />
          </div>
        );
        break;
      case 'cheese':
        ingredient = (
          <div className={classes.Cheese}>
            <BurgerCheese />
          </div>
        );
        break;
      case 'salad':
        ingredient = (
          <div className={classes.Salad}>
            <div className={classes.Tomatoes}>
              <BurgerTomatoes />
            </div>

            <div className={classes.Lettuce}>
              <BurgerLettuce />
            </div>

            <div className={classes.Gerkins}>
              <BurgerGerkins />
            </div>
          </div>
        );
        break;
      case 'bacon':
        ingredient = (
          <div className={classes.Bacon}>
            <BurgerBacon />
          </div>
        );
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
