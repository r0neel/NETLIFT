const initialState = {
    exercise: {}
};


const exercisesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_EXERCISES": {
          const exercises = action.payload;
          return { ...state, exercise: exercises };
        }
        default:
          return state;
      }
}


export default exercisesReducer
