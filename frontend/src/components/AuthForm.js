import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, buttonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);

  return (
    <>
      <Spacer>
        <Text style={styles.title} h3>
          {headerText}
        </Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
      </Spacer>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <View style={styles.button}>
        <Button
          title={buttonText}
          loading={loading}
          disabled={status}
          onPress={() => {
            setLoading(true);
            setStatus(true);
            onSubmit(
              { email, password },
              (revert = () => {
                setStatus(false);
                setLoading(false);
              })
            );
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center"
  },
  button: {
    margin: 30
  }
});

export default AuthForm;
