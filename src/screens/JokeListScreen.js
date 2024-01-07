// JokeListScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const JokeListScreen = ({ navigation }) => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/jokes/ten');
      const data = response.data;

      if (response.status === 200) {
        setJokes(data);
      } else {
        console.log('Failed to fetch jokes');
      }
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  const navigateToJokeDetail = (joke) => {
    navigation.navigate('JokeDetail', { joke });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={jokes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.jokeItem}>
            <Text>{item.setup}</Text>
            <Button title="View Joke" onPress={() => navigateToJokeDetail(item)} />
          </View>
        )}
      />
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
  jokeItem: {
    marginBottom: 16,
  },
});

export default JokeListScreen;
