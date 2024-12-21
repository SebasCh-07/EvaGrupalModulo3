import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Ruta} from './app/screens/rutaScreen'
import {insertarRutas} from './app/screens/InsertarRuta'
import {BusesScreen} from './app/screens/insertarBuses'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Ruta} />
      <Stack.Screen name="insertarRutas" component={insertarRutas} />
      <Stack.Screen name="InsertarBuses" component={insertarRutas} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
