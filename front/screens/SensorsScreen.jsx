import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function SensorsScreen() {

  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  const Seuil = 0.8;

  useEffect(() => {
    const subscription = Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
      checkInclinaison(accelerometerData);
    });

    return () => subscription.remove();
  }, []);

  const checkInclinaison = ({ x, y }) => {
    if (Math.abs(x) > Seuil || Math.abs(y) > Seuil) {
      Alert.alert("Reccouche moi je suis fatigué");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Capture de Mouvement</Text>
      <Text>Gauche / Droite {data.x.toFixed(2)}</Text>
      <Text>Avant / Arriere {data.y.toFixed(2)}</Text>
      <Text>Vertical / Gravité {data.z.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
