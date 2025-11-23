import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import Accueil from './screens/Accueil';
import CameraScreen from './screens/CameraScreen';
import Galerie from './screens/Galerie';
import SecureScreen from './screens/SecureScreen';
import InAppPurchaseScreen from './screens/InAppPurchaseScreen';
import About from './screens/About';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="Accueil" component={Accueil} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="Galerie" component={Galerie} />
        <Stack.Screen name="SecureScreen" component={SecureScreen} />
        <Stack.Screen name="InAppPurchaseScreen" component={InAppPurchaseScreen} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
