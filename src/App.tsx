import * as React from 'react';
import MainScreen from './pages/MainScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const TabStack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <TabStack.Navigator>
        <TabStack.Screen name="main" component={MainScreen}
          options={{
            animation: 'slide_from_bottom',
            headerShown: false,
          }}/>
      </TabStack.Navigator>
    </NavigationContainer>
  );
}
export default App;