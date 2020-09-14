import React from "react";
import connect from "react-redux/lib/connect/connect";
import AddUser from "./AddUser";
import {addUser} from "../../../Redux/mainReducer";

const AddUserContainer = (props) => {
    return(
        <AddUser {...props}/>
    )
}

let mapStateToProps = (state) => ({
    userDescription: state.main.userDescription
})

export default connect(mapStateToProps, {addUser})(AddUserContainer);