const GET_DATA = "GET_DATA";
const GET_USER_INFO = "GET_USER_INFO";
const SORT_COLUMN = "SORT_COLUMN";
const ADD_USER = "ADD_USER";
const ON_SEARCH = "ON_SEARCH";
const SET_DATA_TYPE = "SET_DATA_TYPE";


const initialState = {
    data: [],
    isLoading: true,
    userInfo: null,
    sortType: true,
    sortField: '',
    search: '',
    dataType:''
}

const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                data: action.data
            }
        case GET_USER_INFO:
            return {
                ...state,
                userInfo: action.user
            }
        case SORT_COLUMN:
            return {
                ...state,
                data: [...state.data.sort((a,b) => state.sortType ? (a[action.category] > b[action.category] ? 1 : -1)
                    :b[action.category] > a[action.category] ? 1 : -1)],
                sortType: !state.sortType,
                sortField: action.category
            }
        case ADD_USER:
            return {
                ...state,
                data: [ action.newUser,...state.data]
            }
        case ON_SEARCH:
            return {
                ...state,
                search: action.search
            }
        case SET_DATA_TYPE:

            return {
                ...state,
                dataType: action.payload
            }
        default:
            return state
    }
}

export let getData = (data) => ({type:GET_DATA,data})
export let getUserInfo = (user) => ({type:GET_USER_INFO,user})
export let sortColumn = (category) => ({type:SORT_COLUMN,category})
export let addUser = (newUser) => ({type:ADD_USER,newUser})
export let onSearch = (search) => ({type:ON_SEARCH,search})
export let setDataType = (dataType) => ({type:SET_DATA_TYPE,payload:dataType})

export default MainReducer;