import { StatusBar } from 'expo-status-bar';
import Home from './assets/src/pages/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './assets/src/pages/Login/Login';
const Stack = createNativeStackNavigator();

export default function Route() {
  return (
    <>
    <StatusBar style="auto" />
    <Home/>
    
    </>
  );
};
