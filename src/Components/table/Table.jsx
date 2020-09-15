import React, { useState } from 'react';

import UserInfo from './userInfo/UserInfo';
import Search from './search/Search';
import AddUserContainer from './addUser/AddUserContainer';
import Pagination from './pagination/Pagination';
import TableHead from './tableHead/TableHead';
import TableBody from './tableBody/TableBody';

const Table = props => {
  let [ showAddUser, setShowAddUser ] = useState( false );

  let onSubmit = value => {
    props.onFind( value.search );
  };

  return (
    <div>
      { showAddUser && <AddUserContainer
        setShowAddUser={ setShowAddUser }/>}
      <Search onSubmit={ onSubmit }/>
      <button onClick={ () => setShowAddUser( true )}
        className="btn-text _blue">Добавить пользователя</button>
      <table className="table">
        <TableHead sortColumn={ props.sortColumn }
          sortField={ props.sortField }
          sortType={ props.sortType }/>
        <TableBody dataSort={ props.dataSort }
          getUserInfo={ props.getUserInfo }
        />
      </table>
      { props.pagination.totalUserCount > props.pagination.pageUserCount &&
      <Pagination pagination={ props.pagination }
        changeCurrentPage={ props.changeCurrentPage }/>}
      { props.userInfo && <UserInfo userInfo={ props.userInfo }/>}
    </div>
  );
};

export default Table;