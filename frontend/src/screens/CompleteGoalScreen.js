import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-navigation";
import { View, StyleSheet, Alert, Text } from "react-native";
import {  Button, Input } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";
import Spacer from "../components/Spacer";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const CompleteGoalScreen = props => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const { state, completeGoal } = useContext(AuthContext);
  const { date, goal } = state;
  const completed = true;

  return (
    <SafeAreaView forceInset={{ top: "always", bottom: "always" }} style={styles.container}>
      <View>
      
          <Text style={styles.title}>
            Complete Today's Goal
          </Text>
        
      
          <Text style={styles.text}>
            Today I have commited to:
          </Text>
        
      
          <Text style={styles.text}>
            {goal}
          </Text>
        
        <View style={styles.button}>
          <Button
            title="I completed my goal!"
            loading={loading}
            disabled={status}
            onPress={() =>
              Alert.alert(
                "Confirm Goal Completion",
                "Way to go! We put this here in case you pressed the button by mistake. If so, hit cancel. Otherwise hit HELL YEAH to win the today!",
                [
                  {
                    text: "HELL YEAH",
                    onPress: () => {
                      setLoading(true);
                      setStatus(true);
                      completeGoal(
                        { completed },
                        (revert = () => {
                          setStatus(false);
                          setLoading(false);
                        })
                      );
                    }
                  },
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  }
                ]
              )
            }
          />
        </View>
        <Text style={styles.sub}>
          You have all day to complete this goal. Make sure to come back and
          press this button when you have completed your goal today to let our
          server know you won the day or you'll lose your streak.
        </Text>
        <Text style={styles.sub}>
          If you fail to complete your goal by the end of the day your current
          streak will be set to 0 automatically.
        </Text>
        <Text style={styles.sub}>
          When you log back in tomorrow you will be able to set a new goal.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: responsiveFontSize(5),
    fontWeight: "bold"
  },
  text: {
    textAlign: "center",
    fontSize: responsiveFontSize(3.5),
    fontWeight: "bold",
    margin: responsiveFontSize(1)
  },
  container: {
    flexGrow: 1,
    justifyContent: "space-around"
  },
  button: {
    padding: responsiveFontSize(1),
    paddingHorizontal: responsiveFontSize(6)
  },
  sub: {
    padding: responsiveFontSize(1),
    paddingHorizontal: responsiveFontSize(6)
  }
});

CompleteGoalScreen.navigationOptions = () => {
  return {
    tabBarIcon: () => (
      <MaterialIcons size={40} name={"today"} color={"#4388D6"} />
    )
  };
};

export default CompleteGoalScreen;
