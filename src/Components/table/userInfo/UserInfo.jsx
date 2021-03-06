import React from 'react';

const UserInfo = props => (
  <div className="user-description">
    <h2>{ props.userInfo.firstName } { props.userInfo.lastName }</h2>
    { props.userInfo.description && <div>
      <div className="user-description_item">{props.userInfo.description}</div>
      <p className="user-description_item">Адрес проживания: <b>{props.userInfo.address.streetAddress}</b></p>
      <p className="user-description_item">Город: <b>{props.userInfo.address.city}</b></p>
      <p className="user-description_item">Провинция/штат: <b>{props.userInfo.address.state}</b></p>
      <p className="user-description_item">Индекс: <b>{props.userInfo.address.zip}</b></p>
    </div>
    }</div>
);

export default UserInfo;