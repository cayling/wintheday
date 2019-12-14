import React, { useContext } from "react";
import { SafeAreaView } from "react-navigation";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";

const WelcomeScreen = ({ navigation }) => {
  const { state } = useContext(AuthContext);
  const { best } = state;

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <View style={styles.top}>
        <View>
          <Text style={styles.title} h1>
            Welcome to
          </Text>
          <Text style={styles.title} h1>
            Win the day!
          </Text>
        </View>
        <Text style={styles.text} h4>
          Congratulations on the start of your journey to discovering the power
          of consistent, incremental change.
        </Text>
      </View>
      <View style={styles.nav}>
        <TouchableOpacity disable={true}>
          <MaterialIcons
            name="arrow-back"
            style={{ color: "white", padding: 5, fontSize: 45 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Welcome2")}>
          <MaterialIcons name="arrow-forward" style={styles.image} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    padding: 5,
    fontSize: 45
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 60
  },
  text: {
    textAlign: "left",
    margin: 20,
    marginHorizontal: 60
  },
  container: {
    flexGrow: 1,
    justifyContent: "space-between"
  },
  title: {
    marginHorizontal: 60,
    textAlign: "left"
  },
  top: {
    marginTop: 60
  }
});

WelcomeScreen.navigationOptions = () => {
  return {
    header: null
  };
};

export default WelcomeScreen;
