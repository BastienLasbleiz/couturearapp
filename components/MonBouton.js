import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function MonBouton({ onPress, title, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#449cee',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    margin: 8,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
