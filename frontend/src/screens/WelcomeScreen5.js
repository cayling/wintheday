import React, { useContext } from "react";
import { SafeAreaView } from "react-navigation";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";
import Spacer from "../components/Spacer";
import styles from '../styles/welcome'

const WelcomeScreen = ({ navigation }) => {
  const { state } = useContext(AuthContext);
  const { best } = state;

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title} >
          Ready to start winning?
        </Text>
      </View>
     
      <View style={styles.nav2}>
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


WelcomeScreen.navigationOptions = () => {
  return {
    header: null
  };
};

export default WelcomeScreen;
