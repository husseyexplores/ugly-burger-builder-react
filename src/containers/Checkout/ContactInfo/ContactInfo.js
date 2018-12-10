import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from '../../../axios-orders';

import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import classes from './ContactInfo.css';

class ContactInfo extends Component {
  state = {
    orderForm: {
      name: {
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
          name: 'name',
        },
        validation: {
          required: true,
        },
        valid: false,
        value: '',
      },
      email: {
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-mail',
          name: 'email',
        },
        validation: {
          required: true,
        },
        valid: false,
        value: '',
      },
      address: {
        elementConfig: {
          type: 'text',
          placeholder: 'Your Address',
          name: 'address',
        },
        validation: {
          required: true,
        },
        valid: false,
        value: '',
      },
      zipCode: {
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code',
          name: 'zip',
        },
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
        },
        valid: false,
        value: '',
      },
      country: {
        elementConfig: {
          type: 'text',
          placeholder: 'Country',
          name: 'country',
        },
        validation: {
          required: true,
        },
        valid: false,
        value: '',
      },
      deliveryMethod: {
        elementConfig: {
          type: 'text',
          placeholder: 'Delivery Method',
          name: 'deliverymethod',
        },
        validation: {
          required: true,
        },
        valid: false,
        value: '',
      },
    },
    isLoading: false,
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ isLoading: true });

    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
    console.log(formData);
    const order = {
      ingredients: this.props.ingredients,
      price: parseFloat(this.props.price).toFixed(2),
      orderData: formData,
    };
    axios
      .post('/orders.json', order)
      .then(response => {
        console.log(response);
        this.setState({
          isLoading: false,
        });
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  };

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIndentifier) => {
    const updateOrderForm = {
      ...this.state.orderForm,
    };

    const updatedFormElement = {
      ...updateOrderForm[inputIndentifier],
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updateOrderForm[inputIndentifier] = updatedFormElement;
    console.log(updatedFormElement);
    this.setState({ orderForm: updateOrderForm });
  };

  render() {
    const formElementsArray = [];

    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            type={formElement.config.elementConfig.type}
            name={formElement.config.elementConfig.name}
            placeholder={formElement.config.elementConfig.placeholder}
            value={formElement.config.value}
            required={formElement.config.validation.required}
            invalid={!formElement.config.valid}
            changed={event => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <div style={{ display: 'block', margin: '20px auto' }}>
          <Button btnType="Success" clicked={this.orderHandler}>
            ORDER
          </Button>
        </div>
      </form>
    );
    if (this.state.isLoading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactInfo}>
        <h4 style={{ color: '#404040' }}>Enter Your Contact Information</h4>
        {form}
      </div>
    );
  }
}

// ContactInfo.propTypes = {

// };

// ContactInfo.defaultProps = {

// };

export default ContactInfo;
