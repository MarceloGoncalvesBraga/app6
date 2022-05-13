import { StatusBar } from 'expo-status-bar';
import Home from './assets/src/pages/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Route() {
  return (
    <>
    <Home/>
    <StatusBar style="auto" />

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};
