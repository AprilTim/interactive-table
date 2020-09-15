const GET_DATA = 'GET_DATA';
const GET_USER_INFO = 'GET_USER_INFO';
const SORT_COLUMN = 'SORT_COLUMN';
const ADD_USER = 'ADD_USER';
const ON_SEARCH = 'ON_SEARCH';
const SET_DATA_TYPE = 'SET_DATA_TYPE';
const SET_PAGE_USER_COUNT = 'SET_PAGE_USER_COUNT';

const initialState = {
  data: [],
  dataSort: [],
  isLoading: true,
  userInfo: null,
  sortType: true,
  sortField: '',
  search: '',
  dataType: {
    small: 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
    big: 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
  },
  selectDataType:'',
};

const mainReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
        dataSort: action.payload,
      };
    case GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case SORT_COLUMN:
      return {
        ...state,
        dataSort: [
          ...state.dataSort.sort( ( a, b ) =>
            state.sortType
              ? a[ action.payload ] > b[ action.payload ]
                ? 1
                : -1
              : b[ action.payload ] > a[ action.payload ]
                ? 1
                : -1
          ),
        ],
        sortType: !state.sortType,
        sortField: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        data: [ action.payload, ...state.data ],
        dataSort: [ action.payload, ...state.data ],
      };
    case ON_SEARCH:
      return {
        ...state,
        search: action.payload,
        dataSort: action.payload
          ?  state.data.filter(user => user['firstName'].toLowerCase().includes( action.payload.toLowerCase() ) ||
                user['lastName'].toLowerCase().includes( action.payload.toLowerCase() ) ||
                user['email'].toLowerCase().includes( action.payload.toLowerCase() ))
          :  [...state.data]
      };
    case SET_DATA_TYPE:
      return {
        ...state,
        selectDataType: action.payload,
      };
    case SET_PAGE_USER_COUNT:
      return {
        ...state,
        dataSort: state.data.filter( ( obj, index ) => (
          action.payload.lowerLimit < index + 1 && index + 1 <= action.payload.upperLimit )),
      };
    default:
      return state;
  }
};

export const getData = data => ({ type: GET_DATA, payload: data });
export const getUserInfo = user => ({ type: GET_USER_INFO, payload: user });
export const sortColumn = category => ({
  type: SORT_COLUMN,
  payload: category,
});
export const addUser = newUser => ({ type: ADD_USER, payload: newUser });
export const onSearch = search => ({ type: ON_SEARCH, payload: search });
export const setDataType = dataType => ({
  type: SET_DATA_TYPE,
  payload: dataType,
});
export const setPageUserCount =( lowerLimit, upperLimit) => ({
  type: SET_PAGE_USER_COUNT,
  payload: { lowerLimit, upperLimit }
});

export default mainReducer;
