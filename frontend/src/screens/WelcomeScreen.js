import React, { useContext } from "react";
import { SafeAreaView } from "react-navigation";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";
import styles from '../styles/welcome'

const WelcomeScreen = ({ navigation }) => {
  const { state } = useContext(AuthContext);
  const { best } = state;

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <View style={styles.top}>
        <View>
          <Text style={styles.title}>
            Welcome to
          </Text>
          <Text style={styles.title}>
            Win the day!
          </Text>
        </View>
        <Text style={styles.text}>
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


WelcomeScreen.navigationOptions = () => {
  return {
    header: null
  };
};

export default WelcomeScreen;
