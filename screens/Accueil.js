import React from 'react';
import { View, Text } from 'react-native';
import MonBouton from '../components/MonBouton';

export default function Accueil({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>CoutureAR - Accueil</Text>
      <MonBouton title="Camera" onPress={() => navigation.navigate('CameraScreen')} />
      <MonBouton title="Galerie" onPress={() => navigation.navigate('Galerie')} />
      <MonBouton title="Stockage sécurisé" onPress={() => navigation.navigate('SecureScreen')} />
      <MonBouton title="Achats intégrés" onPress={() => navigation.navigate('InAppPurchaseScreen')} />
      <MonBouton title="À propos" onPress={() => navigation.navigate('About')} />
    </View>
  );
}
