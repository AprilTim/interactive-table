import React from "react";

const TableBody = (props) => {

    return (
        <tbody>
        {props.visibleUserData.map((user, index) => <tr onClick={() => props.getUserInfo(user)}
                                                key={user.id + user.phone + index}
                                                className="table-row">
                <td className="table-ceil ">{user.id}</td>
                <td className="table-ceil ">{user.firstName}</td>
                <td className="table-ceil ">{user.lastName}</td>
                <td className="table-ceil ">{user.email}</td>
                <td className="table-ceil ">{user.phone}</td>
            </tr>
        )}</tbody>

    )
}

export default TableBody;