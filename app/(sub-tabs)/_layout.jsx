import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

const AuthLayout = () => {
  return (
    <>
   
      <Stack>
        <Stack.Screen 
          name="gujarati-alphabets"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="gujarati-numbers"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="gujarati-sentences"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="gujarati-words"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="learn-gujarati"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="learn-math"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="learn-science"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="math-tables"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="math-calculations"
          options={{
            headerShown: false
          }}
        />
      </Stack>
      <StatusBar backgroundColor='#161622' style='light' />
    </>
  )
}

export default AuthLayout