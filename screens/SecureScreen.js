import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function SecureScreen() {
  const [value, setValue] = useState('');
  const [stored, setStored] = useState('');

  const save = async () => {
    await SecureStore.setItemAsync('myKey', value);
    setValue('');
  };

  const load = async () => {
    const v = await SecureStore.getItemAsync('myKey');
    setStored(v || 'Aucune donnée');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Écris une donnée à sécuriser"
        value={value}
        onChangeText={setValue}
        style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
      />
      <Button title="Sauvegarder" onPress={save} />
      <Button title="Charger" onPress={load} />
      <Text style={{ marginTop: 20 }}>Valeur enregistrée : {stored}</Text>
    </View>
  );
}
