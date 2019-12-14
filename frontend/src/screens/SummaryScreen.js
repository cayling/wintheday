import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { Feather } from "@expo/vector-icons";

const SummaryScreen = props => {
  const { state } = useContext(AuthContext);
  return (
    <>
      <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
        <View>
          <Spacer>
            <Text style={{ fontSize: 48, alignSelf: "center" }}>
              Achievements
            </Text>
          </Spacer>

          <Text style={styles.streak}>Current Streak: {state.current} </Text>

          <Text style={styles.streak}>Best Streak: {state.best} </Text>
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
  }
});

SummaryScreen.navigationOptions = () => {
  return {
    tabBarIcon: () => <Feather size={25} name={"award"} color={"#4388D6"} />
  };
};

export default SummaryScreen;
