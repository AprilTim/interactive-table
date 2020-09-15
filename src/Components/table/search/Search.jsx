import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Search = props => (
  <form className="search" onSubmit={ props.handleSubmit }>
    <Field className="input-custom"
      placeholder="Введите имя, фамилию или email..."
      name="search"
      component="input"
    />
    <button className="btn-text _green" type="submit">Search</button>
  </form>
);


export default reduxForm({ form:'search' })( Search );