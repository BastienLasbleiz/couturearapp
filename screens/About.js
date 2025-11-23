import React from 'react';
import { View, Text } from 'react-native';

export default function About() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>À propos de CoutureAR</Text>
      <Text style={{ marginTop: 10 }}>Version 1.0 - Demo Expo React Native</Text>
      <Text style={{ marginTop: 10 }}>Auteur : Bastien Lasbleiz</Text>
    </View>
  );
}
