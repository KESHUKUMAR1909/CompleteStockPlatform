import axios from "axios";
import { AUTH_SUCCESS, AUTH_FAILURE, LOGOUT } from "./actionTypes.js";

axios.defaults.withCredentials = true; // ✅ send cookies automatically

// ✅ LOGIN
export const loginUser = (formData) => {
  return (dispatch) => {
    return axios
      .post(`http://localhost:3002/login`, formData)
      .then((res) => {
        dispatch({ type: AUTH_SUCCESS, payload: res.data.user });
        return res.data; // ✅ needed for await in component
      })
      .catch((err) => {
        dispatch({
          type: AUTH_FAILURE,
          payload: err.response?.data?.message || "Auth failed",
        });
        throw err; // ✅ throw to trigger catch in component
      });
  };
};

// ✅ SIGNUP
export const signupUser = (formData) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3002/signup", formData)
      .then((res) => {
        dispatch({ type: AUTH_SUCCESS, payload: res.data.user });
        return res.data;
      })
      .catch((err) => {
        dispatch({
          type: AUTH_FAILURE,
          payload: err.response?.data?.message || "Auth Failed",
        });
        throw err;
      });
  };
};

// ✅ LOGOUT
export const logoutUser = () => {
  return (dispatch) => {
    axios.post("http://localhost:3002/api/logout", {}, { withCredentials: true }).then(() => {
      dispatch({ type: LOGOUT });
    });
  };
};

// ✅ Fetch current user on refresh
export const fetchUser = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3002/me", { withCredentials: true })
      .then((res) => {
        dispatch({ type: AUTH_SUCCESS, payload: res.data.user });
      })
      .catch(() => {
        dispatch({ type: LOGOUT });
      });
  };
};
