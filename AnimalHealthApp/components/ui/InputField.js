import { StyleSheet, TextInput, View, Text } from "react-native";

function InputField({ value, placeholder, placeholderTextColor }) {
  return (
    <View style={[styles.textInputContainer]}>
      <TextInput
        style={[styles.textInputField]}
        placeholder={placeholder}
        value={value}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
}
export default InputField;

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#98D1A1",
    borderRadius: 5,
  },
  textInputField: {
    flex: 1,
    color: "green",
    paddingVertical: 10,
    paddingRight: 10,
    fontSize: 16,
  },
});
