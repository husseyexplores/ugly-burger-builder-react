import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

class Burger extends Component {
  state = {
    burgerExpanded: false,
  };
  componentDidUpdate() {
    const burgerSelector = `.${classes.Burger}`;

    document.querySelector(burgerSelector).childNodes.forEach(function(el, i) {
      el.style.zIndex = 50 - i;
    });
  }

  styleAndClassesHandler = () => {
    const burgerSelector = `.${classes.Burger}`;

    if (this.state.burgerExpanded) {
      document
        .querySelector(burgerSelector)
        .childNodes.forEach(function(el, i) {
          el.style.zIndex = 50 - i;
          el.classList.add(classes.TransformNone);
        });
    } else {
      document
        .querySelector(burgerSelector)
        .childNodes.forEach(function(el, i) {
          el.style.zIndex = 50 - i;
          el.classList.remove(classes.TransformNone);
        });
    }

    this.setState(prevState => {
      return {
        burgerExpanded: !prevState.burgerExpanded,
      };
    });
  };

  render() {
    const { ingredients } = this.props;

    let transformedIngredients = Object.keys(ingredients)
      .map(igKey => {
        return [...Array(ingredients[igKey])].map((_, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);

    if (transformedIngredients.length === 0) {
      transformedIngredients = (
        <p style={{ transform: 'translateY(-20px)' }}>
          Please start adding ingredients!
        </p>
      );
    }

    return (
      <div
        className={classes.Burger}
        onClick={() => this.styleAndClassesHandler()}
      >
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    );
  }
}

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired,
};

export default Burger;
