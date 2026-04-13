import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadScreen from "../Screens/LoadScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import SignInScreen from "../Screens/SignInScreen";
import NumberScreen from "../Screens/NumberScreen";
import VerificationScreen from "../Screens/VerificationScreen";
import SelectLocationScreen from "../Screens/SelectLocationScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen";
import AppStack from "./AppStack";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Load" component={LoadScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Number" component={NumberScreen} />
      <Stack.Screen name="Verification" component={VerificationScreen} />
      <Stack.Screen name="SelectLocation" component={SelectLocationScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}
export default AppNavigator;
