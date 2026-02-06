import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 43.3118,
          longitude: -1.5525,
          latitudeDelta: 0.02,  
          longitudeDelta: 0.02,
        }}
      >
        <Marker 
          coordinate={{ latitude: 43.3118, longitude: -1.5525 }}
          title="Espelette"
        />

      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});