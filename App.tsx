// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RecommendScreen from './pages/RecommendScreen'
import DiscoverScreen from './pages/DiscoverScreen'
import RoamScreen from './pages/RoamScreen'
import DynamicScreen from './pages/DynamicScreen'
import OwnScreen from './pages/OwnScreen'

const Tab = createBottomTabNavigator();
function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="推荐" component={RecommendScreen}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default App;