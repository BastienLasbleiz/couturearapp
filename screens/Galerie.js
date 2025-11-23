import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

export default function Galerie() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === 'granted') {
        const assets = await MediaLibrary.getAssetsAsync({ mediaType: 'photo', first: 20 });
        setPhotos(assets.assets);
      }
    })();
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Galerie</Text>
      <FlatList
        data={photos}
        keyExtractor={item => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <Image source={{ uri: item.uri }} style={styles.image} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: { width: 100, height: 100, margin: 4, borderRadius: 6 }
});
