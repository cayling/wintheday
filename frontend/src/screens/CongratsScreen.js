import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";

const CongratsScreen = props => {
  const { state, signout } = useContext(AuthContext);

  const { current, best } = state;

  return (
    <>
      <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
        <View>
          <Text style={styles.title}>Congratulations</Text>

          <Text style={styles.subtitle}>Way to freaking win the day!</Text>

          <Text style={styles.streak}>Current Streak: {current} </Text>

          <Text style={styles.streak}>Best Streak: {best} </Text>

          <Text style={styles.sub} h4>
            That's it for today! When you log back in tomorrow you'll be able to
            set a new goal, win the day and increase your streak!
          </Text>
          <View style={styles.button}>
            <Button title="Sign Out" onPress={signout} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  streak: {
    textAlign: "left",
    fontSize: 22,
    padding: 15,
    paddingHorizontal: 50
  },
  container: {
    flexGrow: 1,
    justifyContent: "center"
  },
  sub: {
    padding: 15,
    paddingHorizontal: 50
  },
  button: {
    padding: 15,
    paddingHorizontal: 50
  },
  title: { fontSize: 41, textAlign: "left", paddingHorizontal: 50 },
  subtitle: {
    fontSize: 28,
    alignSelf: "center",
    paddingHorizontal: 50,
    textAlign: "left"
  }
});

CongratsScreen.navigationOptions = () => {
  return {
    tabBarIcon: () => (
      <MaterialIcons size={40} name={"today"} color={"#4388D6"} />
    )
  };
};

export default CongratsScreen;
