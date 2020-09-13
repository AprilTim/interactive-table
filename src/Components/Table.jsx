import React, {useState} from "react";
import UserInfo from "./UserInfo/UserInfo";
import Search from "./Search";
import AddUserContainer from "./AddUser/AddUserContainer";
import Pagination from "./Pagination";


const Table = (props) => {
    let [showAddUser,setShowAddUser] = useState(false)
    let onSubmit = (value) => {
        props.onFind(value.search)
    }

    let arrowType = props.sortType?<span>&#9650;</span>:<span>&#9660;</span>

    return (
        <div>
            <Search onSubmit={onSubmit}/>
            {showAddUser && <AddUserContainer store={props.store} setShowAddUser={setShowAddUser}/>}
            <button onClick={() => setShowAddUser(true)} className="btn-text _blue">Добавить пользователя</button>
            <table className="table">
                <thead>
                <tr>
                    <th onClick={() => props.sortColumn("id")} className="table-ceil th">ID {props.sortField === "id" && arrowType}</th>
                    <th onClick={() => props.sortColumn("firstName")} className="table-ceil">First Name {props.sortField === "firstName" && arrowType}</th>
                    <th onClick={() => props.sortColumn("lastName")} className="table-ceil">Last Name {props.sortField === "lastName" && arrowType}</th>
                    <th onClick={() => props.sortColumn("email")} className="table-ceil">Email {props.sortField === "email" && arrowType}</th>
                    <th onClick={() => props.sortColumn("phone")} className="table-ceil">Phone {props.sortField === "phone" && arrowType}</th>
                </tr>
                </thead>
                <tbody>{props.dataNew.map((user, index) => <tr onClick={() => props.getUserInfo(user)}
                                                               key={user.id+user.phone+index}
                                                           className="table-row">
                        <td className="table-ceil ">{user.id}</td>
                        <td className="table-ceil ">{user.firstName}</td>
                        <td className="table-ceil ">{user.lastName}</td>
                        <td className="table-ceil ">{user.email}</td>
                        <td className="table-ceil ">{user.phone}</td>
                    </tr>
                )}</tbody>
            </table>
            {props.pagination.totalUserCount > props.pagination.pageUserCount && <Pagination pagination={props.pagination}
                         setCurrentPage={props.setCurrentPage}/>}
            {props.userInfo && <UserInfo userInfo={props.userInfo}/>}
        </div>
    )
}

export default Table;