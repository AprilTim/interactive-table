import {combineReducers, createStore} from "redux";
import mainReducer from "./mainReducer";
import { reducer as formReducer } from 'redux-form'
import paginationReducer from "./paginationReducer";
import loaderReducer from "./loaderReducer";

let redusers = combineReducers(
    {
        main: mainReducer,
        pagination: paginationReducer,
        loader: loaderReducer,
        form: formReducer
    }
)

let store = createStore(redusers)
window.store = store
export default store;