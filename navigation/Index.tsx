import * as React from "react";

import SignInScreen from "../screens/SignInScreen/Index";
import SignUpScreen from "../screens/SignUpScreen/Index";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen/Index";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen/Index";
import NewPasswordScreen from "../screens/NewPasswordScreen/Index";
import HomeScreen from "../screens/HomeScreen/Index";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

interface NavigationProps {}

const Stack = createNativeStackNavigator();

const Navigation = (props: NavigationProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
