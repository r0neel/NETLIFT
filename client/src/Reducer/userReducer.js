const initialState = {
  user: {},
  token: ""
};
  
const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case "REGISTER": {
    const newUser = action.payload;
    return { ...state, user: {...state.user, newUser} };
  }
  case "LOGIN": {
    return {...state,token: action.payload.token};
  }
  default: return state;}};
  

export default userReducer;
