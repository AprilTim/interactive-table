import React, {useState} from "react";

import UserInfo from "./UserInfo/UserInfo";
import Search from "./Search/Search";
import AddUserContainer from "./AddUser/AddUserContainer";
import Pagination from "./Pagination/Pagination";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

const Table = (props) => {
    let [showAddUser, setShowAddUser] = useState(false)
    let onSubmit = (value) => {
        props.onFind(value.search)
    }

    return (
        <div>
            {showAddUser && <AddUserContainer store={props.store}
                                              setShowAddUser={setShowAddUser}/>}
            <Search onSubmit={onSubmit}/>
            <button onClick={() => setShowAddUser(true)}
                    className="btn-text _blue">Добавить пользователя</button>
            <table className="table">
                <TableHead sortColumn={props.sortColumn}
                           sortField={props.sortField}
                           sortType={props.sortType}/>
                <TableBody visibleUserData={props.visibleUserData}
                           getUserInfo={props.getUserInfo}
                />
            </table>
            {props.pagination.totalUserCount > props.pagination.pageUserCount &&
            <Pagination pagination={props.pagination}
                        setCurrentPage={props.setCurrentPage}/>}
            {props.userInfo && <UserInfo userInfo={props.userInfo}/>}
        </div>
    )
}

export default Table;