import axios from "axios";
import { AUTH_SUCCESS, AUTH_FAILURE, LOGOUT  } from "./actionTypes.js";

// const API = process.env.REACT_APP_API_URL;
const API =REACT_APP_API_URL;


// ✅ LOGIN
export const loginUser = (formData) => {
  console.log(API);
  return (dispatch) => {
    return axios
      .post(`${API}/login`, formData, { withCredentials: true })
      .then((res) => {
        dispatch({ type: AUTH_SUCCESS, payload: res.data.user });
        return res.data; // for use with await
      })
      .catch((err) => {
        dispatch({
          type: AUTH_FAILURE,
          payload: err.response?.data?.message || "Auth failed",
        });
        throw err;
      });
  };
};

// ✅ SIGNUP
export const signupUser = (formData) => {
  console.log(API);
  return (dispatch) => {
    return axios
      .post(`${API}/signup`, formData, { withCredentials: true })
      .then((res) => {
        dispatch({ type: AUTH_SUCCESS, payload: res.data.user });
        return res.data;
      })
      .catch((err) => {
        dispatch({
          type: AUTH_FAILURE,
          payload: err.response?.data?.message || "Auth failed",
        });
        throw err;
      });
  };
};

// ✅ LOGOUT

export const logoutUser = () => {
  return (dispatch) => {
    axios
      .post(`${API}/api/logout`, {}, { withCredentials: true }) // ensures cookies are included
      .then(() => {
        dispatch({ type: LOGOUT });

        // ✅ Clear localStorage
        localStorage.clear();

        // ✅ Clear client-side cookies
        document.cookie.split(";").forEach(cookie => {
          const name = cookie.split("=")[0].trim();
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        });

        // ✅ Optional: redirect or reload
        window.location.href = "/";
      })
      .catch(() => {
        dispatch({ type: LOGOUT });

        // Fallback cleanup
        localStorage.clear();
        document.cookie.split(";").forEach(cookie => {
          const name = cookie.split("=")[0].trim();
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        });

        window.location.href = "/";
      });
  };
};


// ✅ FETCH USER
export const fetchUser = () => {
  return (dispatch) => {
    axios
      .get(`${API}/me`, { withCredentials: true })
      .then((res) => {
        dispatch({ type: AUTH_SUCCESS, payload: res.data.user });
      })
      .catch(() => {
        dispatch({ type: LOGOUT });
      });
  };
};

