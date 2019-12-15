import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { navigate } from "../navigationRef";
import moment from "moment";
import { reset } from "expo/build/AR";

const ResolveTodayScreen = props => {
  const { state, resetStreak } = useContext(AuthContext);
  const today = new Date().toISOString().split("T")[0];
  const { best, current, date, goal, completed } = state;

  const yesterday = moment(today)
    .subtract(1, "days")
    .toISOString()
    .split("T")[0];

  useEffect(() => {
    if (date === today && completed) {
      navigate("Congrats");
    } else if (date === today && !completed) {
      navigate("CompleteGoal");
    } else if (date === yesterday && completed) {
      navigate("SetGoal");
    } else if (date === yesterday && !completed) {
      resetStreak();
    } else if (date !== yesterday) {
      resetStreak();
    }
  }, []);

  return null;
};

export default ResolveTodayScreen;
