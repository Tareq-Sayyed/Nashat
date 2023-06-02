import { createContext, useReducer } from "react";
export const WorkoutsContext = createContext();
export const workoutsReducer = (state, action) => {
    switch (action.type) {
      // This case is to set all the workouts, which also means that we're fetching all the workouts.  
      case "SET_WORKOUTS":
        return { workouts: action.payload };
      // This case is to add a workout, which also means that we're creating a workout.
      case "CREATE_WORKOUT":
        return { workouts: [action.payload, ...state.workouts] };
      case "DELETE_WORKOUT":
        return { workouts: state.workouts.filter((workout) => workout._id !== action.payload._id) };  
      default:
        return state;
    }
};
export const WorkoutsContextProvider = ({ children }) => {
  // The 2 arguments passed to useReducer are the reducer function's name and the initial state.
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: null });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </WorkoutsContext.Provider>
  );
};

