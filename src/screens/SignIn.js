
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SignIn = ({ route }) => {
  const { joke } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.jokeText}>{joke.setup}</Text>
      <Text style={styles.jokeText}>{joke.delivery}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  jokeText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default SignIn;
