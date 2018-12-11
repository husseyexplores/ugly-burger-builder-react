import React from 'react';

import classes from './Input.css';

const input = props => {
  const isRequired = props.required ? true : false;
  const name = props.name ? props.name : null;

  let inputElement = null;
  const inputClasses = [classes.Input];

  if (props.inavlid) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.type) {
    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          placeholder={props.placeholder}
          type={props.type}
          name={name}
          required={isRequired}
          onChange={props.changed}
        />
      );
      break;

    default:
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          placeholder={props.placeholder}
          type={props.type}
          name={name}
          required={isRequired}
          onChange={props.changed}
          value={props.value}
        />
      );
  }

  return (
    <div className={classes.FieldWrapper}>
      {inputElement}
      <label className={classes.Label}>{props.placeholder}</label>
    </div>
  );
};

export default input;
