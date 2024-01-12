import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    opensans_bold: require("./assets/fonts/OpenSans-Bold.ttf"),
    opensans_italic: require("./assets/fonts/OpenSans-Italic.ttf"),
    opensans_reqular: require("./assets/fonts/OpenSans-Regular.ttf"),
    "opensans_condensed-bold": require("./assets/fonts/OpenSans_Condensed-Bold.ttf"),
  });
  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
