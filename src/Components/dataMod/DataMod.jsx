import React from 'react';

const DataMod = props => (
  <div className="data-mode">
    <button onClick={ () => props.onDataType( 'small' ) }
      className="btn-text _blue">Маленький объем данных</button>
    <button onClick={ () => props.onDataType( 'big' ) }
      className="btn-text _green">Большой объем данных</button>
  </div>
);

export default DataMod;