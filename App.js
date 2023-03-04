import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import styles from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native-web";
import axios from "axios";
axios.create({baseURL:'http://10.16.49.185:8000/login'})
const Stack = createNativeStackNavigator();

import Home from "./screens/home.js";



export default function App() {

  const fetchApi = async() => {
    try{
      const res = await axios.get('http://10.16.49.185:8000/login');
      console.log(res.data);
    }
    catch (error){
      console.log(error.response.data);
    }
  }
  useEffect( () => {
    fetchApi();
  },[]
  )
  return (
  
      <NavigationContainer>
        
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} 
          options={
            {headerShown: false}
          }
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

