const IS_LOADING = 'IS_LOADING';


const initialState = {
  isLoading: false
};

const loaderReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};

export let loading = payload => ({ type:IS_LOADING,payload });

export default loaderReducer;