import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from '../pages/home';
import InputDataPage from '../pages/inputData';
import LoadingPage from '../components/loading';

const Stack = createStackNavigator();

const MyRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="InputDatas" component={InputDataPage} />
        <Stack.Screen name="Loading" component={LoadingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyRoute;
