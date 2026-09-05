import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import Login from "../screens/Login";
import Register from "../screens/Register";
import TabNavigator from "./TabsNavigator";

export type RootStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  UserTabs: { email: string; name: string };
};

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "LoginScreen">;
export type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, "RegisterScreen">;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterScreen" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="UserTabs" component={TabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
