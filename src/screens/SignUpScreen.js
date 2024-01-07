// src/screens/SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import AuthInput from '../components/AuthInput';
// import AuthButton from '../components/AuthButton';

const SignUpScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSignUp = () => {
//     // Implement your sign-up logic here
//     console.log('Signing up with:', email, password, confirmPassword);
//   };

  const navigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <view>
        <h1>signup</h1>
        <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate(navigateToSignIn)
      }
    />
    </view>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  linkText: {
    marginTop: 20,
    color: 'blue',
  },
});

export default SignUpScreen;
