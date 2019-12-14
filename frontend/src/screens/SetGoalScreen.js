import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-navigation";
import { View, StyleSheet, Alert } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";
import moment from "moment";
import Spacer from "../components/Spacer";

const SetGoalScreen = props => {
  const [goal, setsGoal] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const { setGoal } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const completed = false;

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <View>
        <Text style={styles.title} h3>
          Set Today's Goal
        </Text>
        <Spacer>
          <Text style={styles.title} h4>
            {moment(date).format("dddd, MMMM Do YYYY")}.
          </Text>
        </Spacer>
        <Spacer>
          <Text style={styles.title} h4>
            I commit to accomplishing the following:
          </Text>
        </Spacer>
        <Spacer>
          <Input
            placeholder="Write your goal here"
            value={goal}
            onChangeText={setsGoal}
          />
        </Spacer>
        <View style={styles.button}>
          <Button
            title="I will do this today"
            loading={loading}
            disabled={status}
            onPress={() => {
              Alert.alert(
                "Confirm Goal",
                "If you commit to this goal it cannot be changed. Do you commit to setting this as your goal that you MUST complete to win the day?",
                [
                  {
                    text: "Commit",
                    onPress: () => {
                      setLoading(true);
                      setStatus(true);
                      setGoal(
                        { goal, date, completed },
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
              );
            }}
          />
        </View>
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
    marginTop: 30
  },
  button: {
    padding: 15,
    paddingHorizontal: 50
  }
});

SetGoalScreen.navigationOptions = () => {
  return {
    tabBarIcon: () => (
      <MaterialIcons size={40} name={"today"} color={"#4388D6"} />
    )
  };
};

export default SetGoalScreen;
