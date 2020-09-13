import React from "react";

const DataMod = (props) => {

    const small = "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
    const big = "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

    return (
        <div className="data-mode">
            <button onClick={() => props.onDataType(small)} className="btn-text _blue">Маленький объем данных</button>
            <button to="/table" onClick={() => props.onDataType(big)} className="btn-text _green">Большой объем данных</button>
        </div>
    )
}

export default DataMod;