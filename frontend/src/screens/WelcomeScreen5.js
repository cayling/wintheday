import React, { useContext } from "react";
import { SafeAreaView } from "react-navigation";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";
import Spacer from "../components/Spacer";

const WelcomeScreen = ({ navigation }) => {
  const { state } = useContext(AuthContext);
  const { best } = state;

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text} h2>
          Ready to start winning?
        </Text>
        <Text style={styles.text}></Text>
      </View>
      <Text></Text>
      <View style={styles.nav}>
        <View style={styles.left}>
          <TouchableOpacity onPress={() => navigation.navigate("Welcome4")}>
            <MaterialIcons name="arrow-back" style={styles.image} />
          </TouchableOpacity>
        </View>
        <View style={styles.right}>
          <Button
            title="HELL YEAH"
            titleStyle={styles.yeah}
            onPress={() => navigation.navigate("mainFlow")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  left: {
    flexGrow: 1,
    alignItems: "flex-end"
  },
  right: {
    flexGrow: 1,
    paddingHorizontal: 30
  },
  image: {
    padding: 5,
    fontSize: 45
  },
  nav: {
    flexDirection: "row",
    justifyContent: "center",
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
  },
  yeah: {
    fontSize: 25
  }
});

WelcomeScreen.navigationOptions = () => {
  return {
    header: null
  };
};

export default WelcomeScreen;
