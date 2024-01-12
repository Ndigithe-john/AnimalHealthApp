import { View, StyleSheet, Text } from "react-native";
import InputField from "../components/ui/InputField";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors.android";
function RegistrationScreen() {
  return (
    <View style={styles.mainContainer}>
      <InputField
        placeholder="First Name"
        placeholderTextColor={Colors.primary700}
      />
      <InputField
        placeholder="Last Name"
        placeholderTextColor={Colors.primary700}
      />
      <InputField
        placeholder="Email"
        placeholderTextColor={Colors.primary700}
      />
      <InputField
        placeholder="Password"
        placeholderTextColor={Colors.primary700}
      />
      <InputField
        placeholder="Confirm Password"
        placeholderTextColor={Colors.primary700}
      />
      <PrimaryButton>submit</PrimaryButton>
    </View>
  );
}
export default RegistrationScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 30,
    gap: 30,
  },
});
