import {combineReducers, createStore} from "redux";
import MainReducer from "./MainReducer";
import { reducer as formReducer } from 'redux-form'
import paginationReducer from "./paginationReducer";
import loaderReducer from "./loaderReducer";

let redusers = combineReducers(
    {
        main: MainReducer,
        pagination: paginationReducer,
        loader: loaderReducer,
        form: formReducer
    }
)

let store = createStore(redusers)
window.store = store
export default store;