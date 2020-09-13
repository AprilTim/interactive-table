import React from "react";
import DataMod from "./DataMod";
import {connect} from "react-redux";
import {setDataType} from "../../Redux/MainReducer";


const DataModContainer = (props) => {

    const onDataType = (dataType) => {
        props.setDataType(dataType)
        props.setDataMod(true)
    }

    return (
        <DataMod onDataType={onDataType} {...props}/>
    )
}

let mapStateToProps = (state) => ({
    dataType: state.main.dataType
})

export default connect(mapStateToProps,{setDataType})(DataModContainer);