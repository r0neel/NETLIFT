const initialState = {
  user: "",
  profile: {},
  token: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case "LOAD_USER": {
    const profile = action.payload;    
    return { ...state, profile: profile };
  }
  case "LOGIN": {
    const token = action.payload.token;
    const user = action.payload.user;
    return { ...state, token: token, user: user };
  }
  default:
    return state;
  }
};

export default userReducer;
