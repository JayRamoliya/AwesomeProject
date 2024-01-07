// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JokeListScreen from '../screens/JokeListScreen';
import JokeDetailScreen from '../screens/JokeDetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="JokeList">
        <Stack.Screen name="JokeList" component={JokeListScreen} options={{ title: 'Jokes' }} />
        <Stack.Screen name="JokeDetail" component={JokeDetailScreen} options={{ title: 'Joke Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
