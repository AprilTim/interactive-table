import React from "react";
import {Field, reduxForm} from "redux-form";
import {email, num, phone, required} from "../../../Validators/validators";
import Input from "../../FormControl/FormControls";

const AddUserForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className="add-user-form">
            <Field placeholder="ID" validate={[required, num]} name="id" component={Input}/>
            <Field placeholder="First Name..." validate={[required]} name="firstName" component={Input}/>
            <Field placeholder="Last Name..." validate={[required]} name="lastName" component={Input}/>
            <Field placeholder="myemail@mail.com" validate={[required, email]} name="email" component={Input}/>
            <Field placeholder="(333)666-4444" validate={[required, phone]} name="phone" component={Input}/>
            <button disabled={props.invalid} className="btn-text _green" type="submit">Добавить</button>
        </form>
    )
}

const AddUserFormRedux = reduxForm({form:"addUser"})(AddUserForm)

const AddUser = (props) => {

    let onSubmit = (newUser) => {
        props.addUser(newUser)
        props.setShowAddUser(false)
    }

    return(
        <div className="dark-background">
            <div className="new-user">
                <button onClick={() => props.setShowAddUser(false)}
                        className="btn-img _red">&#215;</button>
                <AddUserFormRedux onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default AddUser;