import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";

const CongratsScreen = props => {
  const { state } = useContext(AuthContext);

  const { current, best } = state;
  console.log("congrats", current, best);

  return (
    <>
      <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
        <View>
          <Spacer>
            <Text style={{ fontSize: 48, alignSelf: "center" }}>
              Congratulations
            </Text>
          </Spacer>

          <Text
            style={{
              fontSize: 30,
              alignSelf: "center",
              paddingHorizontal: 50,
              textAlign: "left"
            }}
          >
            Way to freaking win the day!
          </Text>

          <Text style={styles.streak}>Current Streak: {current} </Text>

          <Text style={styles.streak}>Best Streak: {best} </Text>

          <Text style={styles.sub} h4>
            That's it for today! When you log back in tomorrow you'll be able to
            set a new goal, win the day and increase your streak!
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  streak: {
    textAlign: "left",
    fontSize: 25,
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