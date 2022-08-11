import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaInicialSF2 from "./src/Telas/TelaInicialSF2";
import ResultadosPSF2 from "./src/Telas/ResultadosPSF2";
import DetalhesSF2 from "./src/Telas/DetalhesSF2";


const Stack = createNativeStackNavigator();

const AppSF2 = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
        name="TelaInicialSF2"
        component={TelaInicialSF2}
        options={{headerShown: false}}
        />

        <Stack.Screen
        name="ResultadosPSF2"
        component={ResultadosPSF2}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="DetalhesSF2"
        component={DetalhesSF2}
        options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default AppSF2;