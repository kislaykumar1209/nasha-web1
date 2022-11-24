import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  CLEAR_ERRORS,
  GET_USER_FAIL,
  REGISTER_USER_RESET,
} from "../constants/constant";

export const loginReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const registerReducer = (state = { newUser: {} }, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        success: true,
      };

    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case REGISTER_USER_RESET:
      return {
        ...state,
        success: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const userReducer = (state = { people: [] }, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        loading: true,
        people: [],
      };
    case GET_USER_SUCCESS:
      return {
        loading: false,
        people: action.payload.user,
        peopleCount: action.payload.length,
        totalMale:action.payload.totalMale,
        totalFemale:action.payload.totalFemale
      };

    case GET_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
