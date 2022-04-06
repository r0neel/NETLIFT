// export default addUser = e => ({
//   type: "REGISTER",
//   payload: {username:e.target.username, email:e.target.email, password:e.target.password}
// })

import axios from "axios";


export const addUser = (e) => {
  return async (dispatch) => {
    try {
      const username = e.target.username.value;
      const { data } = await axios.post("http://127.0.0.1:5000/login", {
        username: e.target.username.value,
        password: e.target.password.value
      });
      let token = data.access_token;
      dispatch({
        type: "LOGIN",
        payload: {user: username,
          token : token
        }
      });
      
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: err
      });
    }
  };
};
