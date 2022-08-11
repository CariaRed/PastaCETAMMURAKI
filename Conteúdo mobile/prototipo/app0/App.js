import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Task from "./src/pages/Task/index"
import NewTask from "./src/pages/NewTask/index"
import Details from "./src/pages/Details/index"
import 'react-native-gesture-handler';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task">
      <Stack.Screen
      name="Task"
      component={Task}
      options={{
      headerTintColor:"#F92e6a"
      }}
      />
      <Stack.Screen
      name="NewTask"
      component={NewTask}
      options={{
        headerTintColor:"#F92e6a"
      }}
      />
      <Stack.Screen
      name="Details"
      component={Details}
      options={{
        headerTintColor:"#F92e6a"
      }}
      />



      

      </Stack.Navigator>
    </NavigationContainer>
  );
}

