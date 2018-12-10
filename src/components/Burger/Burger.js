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

    const salad = transformedIngredients.filter(x => x.props.type === 'salad');
    const bacon = transformedIngredients.filter(x => x.props.type === 'bacon');
    const cheese = transformedIngredients.filter(
      x => x.props.type === 'cheese'
    );
    const meat = transformedIngredients.filter(x => x.props.type === 'meat');

    let sortedIngredients = [...salad, ...bacon, ...cheese, ...meat].filter(
      el => el !== undefined
    );

    if (sortedIngredients.length === 0) {
      sortedIngredients = (
        <p style={{ transform: 'translateY(-20px)', padding: '1rem' }}>
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
        {sortedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    );
  }
}

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired,
};

export default Burger;
