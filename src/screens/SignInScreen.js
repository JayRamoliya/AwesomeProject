import { View, Text, Button } from 'react-native'
import React from 'react'

const navigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

const SignInScreen = () => {
  return (
    <View>
        <>
      <Text>SignInScreen</Text>
      <Button
      title="SignUp"
      onPress={() =>
        navigation.navigate('SignUp')
      }
    />
        </>
    </View>
  )
}

export default SignInScreen