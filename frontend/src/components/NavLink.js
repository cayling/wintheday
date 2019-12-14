import React, { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import Spacer from "./Spacer";

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
    fontSize: 18,
    alignSelf: "center"
  }
});

export default withNavigation(NavLink);
