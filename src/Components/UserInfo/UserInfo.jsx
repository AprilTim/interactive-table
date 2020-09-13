import React from "react";

const UserInfo = (props) => {
    return(
        <div className="user-description">
            <h2>{props.userInfo.firstName} {props.userInfo.lastName}</h2>
            <div>{props.userInfo.description}</div>
            <p>Адрес проживания: <b>{props.userInfo.address.streetAddress}</b></p>
            <p>Город: <b>{props.userInfo.address.city}</b></p>
            <p>Провинция/штат: <b>{props.userInfo.address.state}</b></p>
            <p>Индекс: <b>{props.userInfo.address.zip}</b></p>
        </div>
    )
}

export default UserInfo;