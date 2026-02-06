import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import * as Location from 'expo-location';

export default function LocationScreen() {

  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission refusée');
      return;
    }

    const loc = await Location.getCurrentPositionAsync();
    setLocation(loc);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location</Text>

      <Pressable style={styles.button} onPress={getLocation}>
        <Text style={styles.buttonText}>Obtenir ma position</Text>
      </Pressable>

      {location && (
        <Text style={styles.locationText}>
          Latitude: {location.coords.latitude} , Longitude: {location.coords.longitude}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  locationText: {
    marginTop: 20,
    fontSize: 16,
  },
});
