import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as axios from 'axios';

import Table from './Table';
import Loading from '../loader/Loading';

import { getData, getUserInfo, onSearch, setPageUserCount, sortColumn } from '../../Redux/mainReducer';
import { setCurrentPage, setUserCount } from '../../Redux/paginationReducer';
import { loading } from '../../Redux/loaderReducer';

const TableContainer = props => {

  useEffect( () => {
    async function requestData() {
      props.loading( true );
      const response = await axios.get( props.selectDataType );
      props.getData( response.data );
      props.setUserCount( response.data.length );
      changeCurrentPage( 1 );
      props.loading( false );
    }
    requestData();
  }, [ props.selectDataType ]);

  const onFind = value => {
    props.onSearch( value );
    props.setCurrentPage( 1 );
    const checkValue = value ? props.dataSort.length : props.data.length;
    props.setUserCount( checkValue );
  };

  const changeCurrentPage = page => {
    props.setCurrentPage( page );
    const pageUserCount = props.pagination.pageUserCount;
    const upperLimit = pageUserCount * page;
    const lowerLimit = upperLimit - pageUserCount;
    props.setPageUserCount( lowerLimit, upperLimit );
  };

  return (
    <div>
      { props.isLoading ? <Loading/> : <Table onFind={onFind}
        dataSort={ props.dataSort }
        { ...props }
        changeCurrentPage={ changeCurrentPage }
      />}
    </div>
  );
};

let mapStateToProps = state => ({
  data: state.main.data,
  dataSort: state.main.dataSort,
  isLoading: state.loader.isLoading,
  userInfo: state.main.userInfo,
  search: state.main.search,
  dataType: state.main.dataType,
  selectDataType: state.main.selectDataType,
  pagination: state.pagination,
  sortField: state.main.sortField,
  sortType: state.main.sortType,
});

export default connect( mapStateToProps, {
  getData,
  getUserInfo,
  sortColumn,
  onSearch,
  setUserCount,
  setCurrentPage,
  loading,
  setPageUserCount,
})( TableContainer );