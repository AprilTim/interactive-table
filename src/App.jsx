import React, { useState } from 'react';

import './App.css';

import TableContainer from './Components/table/TableContainer';
import DataModContainer from './Components/dataMod/DataModContainer';

const App = () => {
  let [ dataMod, setDataMod ] = useState( false );

  return (
    <div className="main">
      <DataModContainer setDataMod={ setDataMod }/>
      { dataMod && <TableContainer/> }
    </div>
  );
};

export default App;