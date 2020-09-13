const SET_USER_COUNT = "SET_USER_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";


const initialState = {
    currentPage: 1,
    totalUserCount: '',
    pageUserCount: 50
}

const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_COUNT:
            return {
                ...state,
                totalUserCount: action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state
    }
}

export let setUserCount = (count) => ({type:SET_USER_COUNT,payload:count})
export let setCurrentPage = (page) => ({type:SET_CURRENT_PAGE,payload:page})

export default paginationReducer;