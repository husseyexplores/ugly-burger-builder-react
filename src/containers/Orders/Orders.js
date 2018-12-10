import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {
  state = {
    orders: [],
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get('orders.json')
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }

        this.setState({
          isLoading: false,
          orders: fetchedOrders,
        });
        console.log(fetchedOrders);
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isLoading: false,
        });
      });
  }

  render() {
    let data = <Spinner />;

    if (!this.state.isLoading) {
      data = this.state.orders.map(order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      ));
    }
    return <div>{data}</div>;
  }
}

// Orders.propTypes = {

// };

// Orders.defaultProps = {

// };

export default withErrorHandler(Orders, axios);
