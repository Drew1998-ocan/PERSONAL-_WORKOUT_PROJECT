import { createContext, useReducer } from "react";

export const MyContext = createContext();
export const workoutReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_WORKOUT":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };

    default:
      return state;
  }
};

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, { workouts: [] });

  return (
    <MyContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};
