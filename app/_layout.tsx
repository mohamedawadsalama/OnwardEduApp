import { Stack } from 'expo-router';
import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ title: 'OnwardEdu' }} />
          <Stack.Screen name="login" options={{ title: 'Login' }} />
          <Stack.Screen name="signup" options={{ title: 'Sign Up' }} />
        </Stack>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
