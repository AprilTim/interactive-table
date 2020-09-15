import React from 'react';

const UserInfo = props => (
  <div className="user-description">
    <h2>{ props.userInfo.firstName } { props.userInfo.lastName }</h2>
    <div className="user-description_item">{ props.userInfo.description && props.userInfo.description }</div>
    <p className="user-description_item">Адрес проживания: <b>{ props.userInfo.address.streetAddress && props.userInfo.address.streetAddress }</b></p>
    <p className="user-description_item">Город: <b>{ props.userInfo.address.city && props.userInfo.address.city }</b></p>
    <p className="user-description_item">Провинция/штат: <b>{ props.userInfo.address.state && props.userInfo.address.state }</b></p>
    <p className="user-description_item">Индекс: <b>{ props.userInfo.address.zip && props.userInfo.address.zip }</b></p>
  </div>
);

export default UserInfo;