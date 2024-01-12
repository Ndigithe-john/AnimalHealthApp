import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/colors";

import PrimaryButton from "../components/ui/PrimaryButton";
import { LinearGradient } from "expo-linear-gradient";
function WelcomeScreen({ navigation }) {
  function onLoginPressHandler() {
    navigation.navigate("Login");
  }
  function onRegistrationPressHandler() {
    navigation.navigate("Registration");
  }
  const { width, height } = useWindowDimensions();
  let imageDimensions = 400;
  if (width < 380) {
    imageDimensions = 150;
  }

  if (height < 400) {
    imageDimensions = 80;
  }
  const imageStyle = {
    width: imageDimensions,
    height: imageDimensions - 100,
    borderRadius: 3,
  };
  return (
    <LinearGradient
      colors={[Colors.primary100, Colors.primary200]}
      style={styles.mainContainer}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.mainHeader}> Animal Health</Text>
      </View>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          style={styles.imageStyles}
          source={require("../assets/images/introimage.jpg")}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Welcome to the Home of Livestock Caring Farmers
        </Text>
      </View>
      <View style={styles.secondDescContainer}>
        <Text style={[styles.secondDescriptionText]}>
          Learn and connect with over 1000 Farmers who use this application
          system
        </Text>
      </View>

      <PrimaryButton onPress={onRegistrationPressHandler}>
        Create Account
      </PrimaryButton>
      <TouchableOpacity style={styles.bottomText} onPress={onLoginPressHandler}>
        <Text>Already have an account</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
export default WelcomeScreen;
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  mainHeader: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  imageContainer: {
    overflow: "hidden",
  },
  imageStyles: {
    width: "100%",
    height: "100%",
  },
  descriptionContainer: {
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  descriptionText: {
    fontSize: 17,
    fontStyle: "italic",
  },
  secondDescContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  secondDescriptionText: {
    fontSize: 21,
    color: Colors.primary300,
    fontWeight: "bold",
    fontFamily: "opensans_italic",
    fontStyle: "italic",
    marginBottom: 90,
  },
  bottomText: {
    marginTop: 10,
    alignItems: "center",
  },
});
