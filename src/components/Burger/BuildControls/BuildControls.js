import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

class BuildControls extends Component {
  render() {
    const { BuildControls, OrderButton } = classes;

    return (
      <div className={BuildControls}>
        <p>
          Current Price: <strong>${this.props.burgerPrice.toFixed(2)}</strong>
        </p>
        {controls.map(ctrl => (
          <BuildControl
            added={() => this.props.ingredientAdded(ctrl.type)}
            removed={() => this.props.ingredientRemoved(ctrl.type)}
            key={ctrl.label}
            label={ctrl.label}
            disabled={this.props.disabled[ctrl.type]}
          />
        ))}

        <button
          className={OrderButton}
          disabled={!this.props.purchaseable}
          onClick={this.props.ordered}
        >
          ORDER NOW
        </button>
      </div>
    );
  }
}

BuildControls.propTypes = {
  burgerPrice: PropTypes.number.isRequired,
  ingredientAdded: PropTypes.func.isRequired,
  ingredientRemoved: PropTypes.func.isRequired,
  disabled: PropTypes.object.isRequired,
  purchaseable: PropTypes.bool.isRequired,
  ordered: PropTypes.func.isRequired,
};

export default BuildControls;
