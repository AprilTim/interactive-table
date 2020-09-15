import React from 'react';

import './FormControls.css';

const Input = ({ input,meta,...props }) => (
  <div className="input">
    <input className={ `input-custom ${ meta.visited && meta.invalid && 'input-custom_warn' }` }
      {...input} {...props}/>
    <div className={ `input-custom_error ${ meta.visited && meta.error && 'showError' } `}>{ meta.error }</div>
  </div>
);

export default Input;
