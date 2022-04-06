// export default addUser = e => ({
//   type: "REGISTER",
//   payload: {username:e.target.username, email:e.target.email, password:e.target.password}
// })

export const addUser = (e) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${process.env.API_URL}/login`, {
        username: e.target.username,
        password: e.target.password
      });
      let token = data.message.access_token;
      dispatch({
        type: "LOGIN",
        payload: token
      });
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: err
      });
    }
  };
};
