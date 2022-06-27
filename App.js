import React from "react";
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Materia from './src/pages/Materia';
import NovaMateria from "./src/pages/NovaMateria";
import Details from "./src/pages/details";

const stack = createStackNavigation() 

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName = "Materia" >
        <Stack.Scream
          name = "Matéria"
          component = {Materia}
          options = {{
            headerTintColor: "#f92e6a"
          }}
        />
        <Stack.Scream
          name = "Nova Matéria"
          component = {NovaMateria}
          options = {{
            headerTintColor: "#f92e6a"
          }}
        />
        <Stack.Scream
          name = "Details"
          component = {Details}
          options = {{
            headerTintColor: "#f92e6a"
          }}
        />
    </Stack.Navigator>
   </NavigationContainer>
  );
}