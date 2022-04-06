import axios from "axios";

export const addUser = (e) => {
  return async (dispatch) => {
    try {
      const username = e.target.username.value;
      const { data } = await axios.post("http://127.0.0.1:5000/login", {
        username: e.target.username.value,
        password: e.target.password.value
      });
      let token = `Bearer ${data.access_token}`;
      localStorage.setItem("token", token);
      dispatch({
        type: "LOGIN",
        payload: { user: username, token: token }
      });
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: err
      });
    }
  };
};

export const fetchProfile = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.get("http://127.0.0.1:5000/user", {
        headers: { Authorization: token }
      });
      dispatch({
        type: "LOAD_USER",
        payload: data
      });
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: err
      });
    }
  };
};
