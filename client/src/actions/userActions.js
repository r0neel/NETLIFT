import axios from "axios";
const api = process.env.API_URL;

export const registerUser = (e) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${api}/register`, {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value
      });
      return dispatch(loginUser(e));
    } catch (err) {
      return err;
    }
  };
};

export const loginUser = (e) => {
  return async (dispatch) => {
    try {
      const username = e.target.username.value;
      const { data } = await axios.post(`${api}/login`, {
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

      const { data } = await axios.get(`${api}/user`, {
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

export const updateUser = (updateCase)=> {
  return async (dispatch) => {
    try{
      const token = localStorage.getItem("token");
      console.log(updateCase);

      const { data } = await axios.patch(`${api}/user`, updateCase, {
        headers: { Authorization: token }
      });
      console.log(data);
      

    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: err
      });
    }

  };
};
