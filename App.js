import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/pages/Home";
import Main from "./src/pages/Main";

function HomeScreen() {
  return (
    <Home/>
  );
}

function MainScreen(){
  return(<Main/>);
}

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};
