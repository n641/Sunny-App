import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from '../Screens/StartScreen';
import HomeScreen from '../Screens/HomeScreen';
import GameScreen from '../Screens/GameScreen';
const Stack = createNativeStackNavigator();

const NavigationsApp = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="StartScreen" component={StartScreen} options={{headerShown:false}}/>

       <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown:false
        }}/> 

        <Stack.Screen name="GameScreen" component={GameScreen} options={{
          title: 'back',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // headerShown:false
        }}/> 
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default NavigationsApp

