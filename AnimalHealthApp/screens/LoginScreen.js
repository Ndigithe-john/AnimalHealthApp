import { View, StyleSheet, TextInput, Text } from "react-native";

function LoginScreen() {
  return (
    <View>
      <Text>Enter Your Registration Details</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        autoCapitalize="none"
        autoComplete="none"
        value="value"
        autoCorrect={false}
      />
    </View>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  textInput: {
    height: 50,
    width: "70%",
    justifyContent: "center",
    fontSize: 24,
    borderBottomWidth: 2,
    marginVertical: 8,
    textAlign: "center",
  },
});
