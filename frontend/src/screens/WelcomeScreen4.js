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
        <Text style={styles.title}>
          No rest for the wicked.
        </Text>
        <Text style={styles.text}>
          A goal must be set and completed each day to increase your streak.
        </Text>
        <Text style={styles.text}>
          Yes, even on weekends.
        </Text>
      </View>
     
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate("Welcome3")}>
          <MaterialIcons name="arrow-back" style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Welcome5")}>
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
