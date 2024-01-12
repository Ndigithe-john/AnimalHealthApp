import { View, StyleSheet, Text } from "react-native";
import InputField from "../components/ui/InputField";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors.android";
function LoginScreen() {
  return (
    <View style={styles.mainContainer}>
      <Text>Enter Your Login Details</Text>
      <View>
        <InputField
          placeholder="Input Email"
          placeholderTextColor={Colors.primary700}
        />
      </View>
      <View style={styles.passwordView}>
        <InputField
          placeholder="Password"
          placeholderTextColor={Colors.primary700}
        />
        <MaterialCommunityIcons
          style={styles.iconStyle}
          name={"eye"}
          size={24}
        />
      </View>
      <View>
        <PrimaryButton>Login</PrimaryButton>
      </View>
    </View>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
    margin: 30,
    gap: 40,
  },
  passwordView: {
    marginLeft: -3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    marginLeft: -30,
  },
});
