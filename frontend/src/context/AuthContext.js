import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import axiosApi from "../api/axiosURL";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "singup_error":
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
        status: false
      };
    case "signin":
      return {
        errorMessage: "",
        token: action.payload.token,
        best: action.payload.best,
        current: action.payload.current,
        goal: action.payload.goal,
        date: action.payload.date,
        completed: action.payload.completed
      };
    case "clear_errors":
      return { ...state, errorMessage: "" };
    case "signout":
      return { ...state, token: null };
    case "setGoal":
      return {
        ...state,
        goal: action.payload.goal,
        date: action.payload.date,
        completed: action.payload.completed
      };
    case "setGoal_error":
      return { ...state, errorMessage: action.payload };
    case "completeGoal":
      return {
        ...state,
        completed: action.payload.completed,
        current: action.payload.current,
        best: action.payload.best
      };
    case "completeGoal_error":
      return { ...state, errorMessage: action.payload };
    case "resetStreak":
      return { ...state, current: 0 };
    default:
      return state;
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: "clear_errors" });
};

const signup = dispatch => {
  return async ({ email, password }, revert) => {
    try {
      const response = await axiosApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data });
      navigate("Welcome");
    } catch (err) {
      revert();
      dispatch({
        type: "singup_error",
        payload: "User already exists."
      });
    }
  };
};

const signin = dispatch => {
  return async ({ email, password }, revert) => {
    try {
      const response = await axiosApi.post("/signin", { email, password });

      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data });
      navigate("ResolveToday");
    } catch (err) {
      revert();
      dispatch({
        type: "singup_error",
        payload: "Something went wrong with sign in"
      });
    }
  };
};

const signout = dispatch => {
  return async () => {
    await AsyncStorage.removeItem("token");
    dispatch({
      type: "signout"
    });
    navigate("loginFlow");
  };
};

const setGoal = dispatch => {
  return async ({ goal, date, completed }) => {
    try {
      console.log("setgoal client", goal, date);
      const response = await axiosApi.put("/setGoal", {
        goal,
        date,
        completed
      });
      console.log(" sg c resp", response.data);
      dispatch({ type: "setGoal", payload: response.data });
      navigate("CompleteGoal");
    } catch (err) {
      dispatch({
        type: "setGoal_error",
        payload: "Something went wrong with set goal"
      });
    }
  };
};

const completeGoal = dispatch => {
  return async ({ completed, _id }) => {
    try {
      console.log("completeGoal client", completed, _id);
      const response = await axiosApi.put("/completeGoal", { completed, _id });
      console.log(" compgoal c resp", response.data);
      dispatch({ type: "completeGoal", payload: response.data });
      navigate("Congrats");
    } catch (err) {
      dispatch({
        type: "completeGoal_error",
        payload: "Something went wrong with complete goal"
      });
    }
  };
};

const resetStreak = dispatch => {
  return async () => {
    try {
      console.log("reset client");
      const response = await axiosApi.put("/resetStreak");
      console.log("reset client response", response.data);
      dispatch({ type: "resetStreak" });
      navigate("LostStreak");
    } catch (err) {
      dispatch({
        type: "resetStreak_error",
        payload: "Something went wrong with reset streak"
      });
    }
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    clearErrorMessage,
    signin,
    signup,
    signout,
    setGoal,
    completeGoal,
    resetStreak
  },
  { token: null, errorMessage: "" }
);
