import React from 'react';
import {
  useFonts, // loading the font
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import { Home } from './src/screens/Home';

export default function App() {
  // fonts should be loaded first. Then we can show the app | Async method
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="light" />
      <Home />
    </>
  );
}