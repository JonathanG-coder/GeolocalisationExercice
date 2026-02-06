import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title="Location" onPress={() => navigation.navigate('Location')} />
      <Button title="Sensors" onPress={() => navigation.navigate('Sensors')} />
      <Button title="Maps" onPress={() => navigation.navigate('Maps')} />
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
});
