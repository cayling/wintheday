import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SummaryScreen from "./src/screens/SummaryScreen";
import SetGoalScreen from "./src/screens/SetGoalScreen";
import CompleteGoalScreen from "./src/screens/CompleteGoalScreen";
import CongratsScreen from "./src/screens/CongratsScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import WelcomeScreen2 from "./src/screens/WelcomeScreen2";
import WelcomeScreen3 from "./src/screens/WelcomeScreen3";
import WelcomeScreen4 from "./src/screens/WelcomeScreen4";
import WelcomeScreen5 from "./src/screens/WelcomeScreen5";
import LostStreakScreen from "./src/screens/LostStreakScreen";
import ResolveTodayScreen from "./src/screens/ResolveTodayScreen";

import { Provider as AuthProvider } from "./src/context/AuthContext";

import { MaterialIcons } from "@expo/vector-icons";

import { setNavigator } from "./src/navigationRef";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen
  }),
  ResolveToday: ResolveTodayScreen,
  LostStreak: LostStreakScreen,
  welcomeFlow: createStackNavigator({
    Welcome: WelcomeScreen,
    Welcome2: WelcomeScreen2,
    Welcome3: WelcomeScreen3,
    Welcome4: WelcomeScreen4,
    Welcome5: WelcomeScreen5
  }),
  mainFlow: createBottomTabNavigator({
    Today: {
      screen: createSwitchNavigator({
        SetGoal: SetGoalScreen,
        CompleteGoal: CompleteGoalScreen,
        Congrats: CongratsScreen
      }),
      navigationOptions: {
        tabBarLabel: "Today",
        tabBarIcon: () => (
          <MaterialIcons size={30} name={"today"} color={"#4388D6"} />
        )
      }
    },
    Achievements: SummaryScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={navigator => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
