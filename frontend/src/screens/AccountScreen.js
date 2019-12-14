import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";

const AccountScreen = props => {
  const { signout } = useContext(AuthContext);

  return (
    <>
      <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
        <Text style={{ fontSize: 48, alignSelf: "center" }}>Account</Text>

        <View style={styles.button}>
          <Button title="Sign Out" onPress={signout} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",

    flexGrow: 1
  },
  button: {
    padding: 15,
    paddingHorizontal: 50
  }
});

AccountScreen.navigationOptions = () => {
  return {
    tabBarIcon: () => (
      <MaterialIcons size={30} name={"account-box"} color={"#4388D6"} />
    )
  };
};

export default AccountScreen;
