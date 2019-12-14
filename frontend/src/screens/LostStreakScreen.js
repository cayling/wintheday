import React, { useContext } from "react";
import { SafeAreaView } from "react-navigation";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";

const LostStreakScreen = ({ navigation }) => {
  const { state } = useContext(AuthContext);
  const { best } = state;

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <View>
        <Text h3>You lost your streak</Text>
        <Text h5>
          These things happen. You must not have set and completed a goal
          yesterday. But today is another day. Another day that you can win! Try
          to beat your current best streak of {best}{" "}
        </Text>
        <View style={styles.button}>
          <Button
            title="Today I will Win!"
            onPress={() => navigation.navigate("SetGoal")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center"
  },
  button: {
    padding: 15,
    paddingHorizontal: 50
  }
});

export default LostStreakScreen;
