// In App.js in a new project

import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecommendScreen from './pages/RecommendScreen';
import DiscoverScreen from './pages/DiscoverScreen';
import RoamScreen from './pages/RoamScreen';
import DynamicScreen from './pages/DynamicScreen';
import OwnScreen from './pages/OwnScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Image, StyleSheet } from 'react-native';
const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="推荐" component={RecommendScreen}
          options={{
            tabBarIcon: ({focused})=>(
              <Image source={focused?require('./static/image/recommend_red.png'):require('./static/image/recomment.png')} 
              style={focused?styles.bottomIcon:styles.focusedBottomIcon}/>
            ),
          }}/>
        <Tab.Screen name="发现" component={DiscoverScreen} 
          options={{
            tabBarIcon: ({focused})=>(
              <Image source={focused?require('./static/image/discover_red.png'):require('./static/image/discover.png')} 
              style={focused?styles.bottomIcon:styles.focusedBottomIcon}/>
            ),
          }}/>
        <Tab.Screen name="漫游" component={RoamScreen}
          options={{
            tabBarIcon: ({focused})=>(
              <Image source={focused?require('./static/image/roam_red.png'):require('./static/image/roam.png')} 
              style={focused?styles.bottomIcon:styles.focusedBottomIcon}/>
            ),
          }}/>
        <Tab.Screen name="动态" component={DynamicScreen}
          options={{
            tabBarIcon: ({focused})=>(
              <Image source={focused?require('./static/image/dynamic_red.png'):require('./static/image/dynamic.png')} 
              style={focused?styles.bottomIcon:styles.focusedBottomIcon}/>
            ),
          }}/>
        <Tab.Screen name="我的" component={OwnScreen}
          options={{
            tabBarIcon: ({focused})=>(
              <Image source={focused?require('./static/image/wode_red.png'):require('./static/image/wode.png')} 
              style={focused?styles.bottomIcon:styles.focusedBottomIcon}/>
            ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  bottomIcon:{
    width: 20,
    height: 20,
    backgroundColor: 'red',
  },
  focusedBottomIcon:{
    width: 20,
    height: 20,
    backgroundColor: '#fff',
  },
});
export default App;
