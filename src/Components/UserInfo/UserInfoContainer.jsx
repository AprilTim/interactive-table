import React from "react";
import connect from "react-redux/lib/connect/connect";
import UserInfo from "./UserInfo";


const UserInfoContainer = (props) => {
    return(
        <UserInfo {...props}/>
    )
}

let mapStateToProps = (state) => ({
    userDescription: state.main.userDescription
})

export default connect(mapStateToProps,null)(UserInfoContainer);