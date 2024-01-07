import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>jay</Text>
      <h1>jay ramoliya</h1>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const LoginScreen = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Add your login logic here
//     console.log('Username:', username);
//     console.log('Password:', password);
//     // You can implement authentication logic here (e.g., API call, authentication service)
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         value={username}
//         onChangeText={(text) => setUsername(text)}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//       />

//       <Button title="Login" onPress={handleLogin} />

//       {/* Add additional UI elements, such as a "Forgot Password?" link or a "Sign Up" button */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 16,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 16,
//     paddingLeft: 8,
//   },
// });

// export default LoginScreen;

// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const JokesApp = () => {
//   const [joke, setJoke] = useState('');

//   useEffect(() => {
//     fetchJoke();
//   }, []);

//   const fetchJoke = async () => {
//     try {
//       const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
//       const data = await response.json();

//       if (response.ok) {
//         setJoke(data.setup + '\n\n' + data.delivery);
//       } else {
//         setJoke('Failed to fetch joke');
//       }
//     } catch (error) {
//       console.error('Error fetching joke:', error);
//       setJoke('An error occurred');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.jokeText}>{joke}</Text>
//       <Button title="Get Joke" onPress={fetchJoke} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   jokeText: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginBottom: 16,
//   },
// });

// export default JokesApp;


// App.js
// import React from 'react';
// import AppNavigator from './src/navigation/AppNavigator';

// const App = () => {
//   return <AppNavigator />;
// };

// export default App;

