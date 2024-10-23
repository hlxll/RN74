import * as React from 'react';
import MainScreen from './pages/MainScreen';
import ModalScreen from './pages/ModalScreen';
import RoamScreen from './pages/RoamScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './model';

const TabStack = createNativeStackNavigator();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabStack.Navigator>
          <TabStack.Screen name="main" component={MainScreen}
            options={{
              animation: 'slide_from_bottom',
              headerShown: false,
            }}/>
          <TabStack.Screen name="roamScreen" component={RoamScreen}
            options={{
              animation: 'slide_from_bottom',
              headerShown: false,
            }}/>
        </TabStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
