import React from 'react';
import { View, Text, Button } from 'react-native';

export default function InAppPurchaseScreen() {
  const acheter = () => {
    // Stub : intègre expo-in-app-purchases ici
    alert('Achat fictif réussi !');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Achats intégrés</Text>
      <Button title="Acheter (demo)" onPress={acheter} />
    </View>
  );
}
