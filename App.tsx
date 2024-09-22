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
import { SvgUri } from 'react-native-svg';
const svgUrl = '<?xml version="1.0" standalone="no"?><svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1"><path fill="#000000" d="M512 1024C229.229714 1024 0 794.770286 0 512 0 229.229714 229.229714 0 512 0 794.770286 0 1024 229.229714 1024 512 1024 794.770286 794.770286 1024 512 1024ZM512 80.847238C273.871238 80.847238 80.847238 273.871238 80.847238 512 80.847238 750.128762 273.871238 943.152762 512 943.152762 750.128762 943.152762 943.152762 750.128762 943.152762 512 943.152762 273.871238 750.128762 80.847238 512 80.847238ZM229.059048 794.940952 404.21181 404.21181 794.940952 229.059048 619.78819 619.78819 229.059048 794.940952ZM444.635429 444.635429 323.364571 700.635429 579.364571 579.364571 444.635429 444.635429Z" /></svg>';
const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="推荐" component={RecommendScreen}
          options={{
            tabBarIcon: ({focused})=>(
              <SvgUri uri={svgUrl} width={20} height={20}/>
              // <Image source={focused?require('./static/image/recommend_red.png'):require('./static/image/recomment.png')} 
              // style={focused?styles.bottomIcon:styles.focusedBottomIcon}/>
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
