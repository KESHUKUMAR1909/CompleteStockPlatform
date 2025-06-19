import { AUTH_SUCCESS, AUTH_FAILURE, LOGOUT } from './actionTypes';

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case AUTH_FAILURE:
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: action.payload || null,
      };
    default:
      return state;
  }
};

export default authReducer;
