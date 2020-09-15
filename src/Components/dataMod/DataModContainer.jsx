import React from 'react';
import {connect} from 'react-redux';

import DataMod from './DataMod';

import {setDataType} from '../../Redux/mainReducer';

const DataModContainer = props => {
  const onDataType = type => {
    const selectDataType = type == 'small' ? props.dataType.small : props.dataType.big;
    props.setDataType( selectDataType );
    props.setDataMod( true );
  };

  return (
    <DataMod onDataType={ onDataType } { ...props }/>
  );
};

let mapStateToProps = state => ({
  dataType: state.main.dataType,
});

export default connect(mapStateToProps,{setDataType})(DataModContainer);