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
          No take backs.
        </Text>
        <Text style={styles.text}>
          Once you commit to a goal for the day it cannot be changed.
        </Text>
        <Text style={styles.text} >
          Do or do not, there is no try.
        </Text>
      </View>
      
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate("Welcome2")}>
          <MaterialIcons name="arrow-back" style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Welcome4")}>
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
