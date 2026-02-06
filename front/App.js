import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import LocationScreen from "./screens/LocationScreen";
import SensorsScreen from "./screens/SensorsScreen";
import MapScreen from "./screens/MapScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Sensors" component={SensorsScreen} />
        <Stack.Screen name="Maps" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
