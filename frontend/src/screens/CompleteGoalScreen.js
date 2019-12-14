import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-navigation";
import { View, StyleSheet, Alert } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";
import Spacer from "../components/Spacer";

const CompleteGoalScreen = props => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const { state, completeGoal } = useContext(AuthContext);
  const { date, goal } = state;
  const completed = true;

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <View>
        <Spacer>
          <Text style={styles.title} h3>
            Complete Today's Goal
          </Text>
        </Spacer>
        <Spacer>
          <Text style={styles.title} h4>
            Today I have commited to:
          </Text>
        </Spacer>
        <Spacer>
          <Text style={styles.title} h4>
            {goal}
          </Text>
        </Spacer>
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
        <Text style={styles.sub} h5>
          You have all day to complete this goal. Make sure to come back and
          press this button when you have completed your goal today to let our
          server know you won the day or you'll lose your streak.
        </Text>
        <Text style={styles.sub} h5>
          If you fail to complete your goal by the end of the day your current
          streak will be set to 0 automatically.
        </Text>
        <Text style={styles.sub} h5>
          When you log back in tomorrow you will be able to set a new goal.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center"
  },
  container: {
    flexGrow: 1,
    justifyContent: "center"
  },
  button: {
    padding: 15,
    paddingHorizontal: 50
  },
  sub: {
    padding: 15,
    paddingHorizontal: 50
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
