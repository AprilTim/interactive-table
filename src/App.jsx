import React, {useState} from 'react';
import './App.css';
import TableContainer from "./Components/TableContainer";
import DataModContainer from "./Components/DataMod/DataModContainer";


const App = (props) => {

    let [dataMod, setDataMod] = useState(false)

    return (
        <div className="main">
            <DataModContainer setDataMod={setDataMod} store={props.store}/>
            {dataMod && <TableContainer store={props.store}/>}
        </div>
    );


}

export default App;
