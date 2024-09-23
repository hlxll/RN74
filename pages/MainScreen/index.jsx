/* eslint-disable react/no-unstable-nested-components */
// In App.js in a new project

import * as React from 'react';
import {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecommendScreen from '../RecommendScreen';
import DiscoverScreen from '../DiscoverScreen';
import RoamScreen from '../RoamScreen';
import DynamicScreen from '../DynamicScreen';
import OwnScreen from '../OwnScreen';
import { View, StyleSheet } from 'react-native';
import Discover from '../../static/image/discover.svg';
import Dynamic from '../../static/image/dynamic.svg';
import Recommend from '../../static/image/recommend.svg';
import Roam from '../../static/image/roam.svg';
import Wode from '../../static/image/wode.svg';

import Discover_b from '../../static/image/discover_b.svg';
import Dynamic_b from '../../static/image/dynamic_b.svg';
import Recommend_b from '../../static/image/recommend_b.svg';
import Roam_b from '../../static/image/roam_b.svg';
import Wode_b from '../../static/image/wode_b.svg';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
function MainScreen() {
    const [initTab, setInitTab] = useState('discover');
    const [showRoam, setShowRoam] = useState(false);
    const navigation = useNavigation();
    const RoamModal = (props)=>{
        return(
            <RoamScreen {...props} showRoam={showRoam} setShowRoam={handleCloseModal}/>
        );
    };
    const handleOpenModal = ()=>{
        setShowRoam(true);
    };
    const handleChangeInit = (type)=>{
        setInitTab(type);
    };
    const handleCloseModal = (type)=>{
        setShowRoam(type);
        navigation.navigate(initTab);
    };
    return (
        <Tab.Navigator initialRouteName={'Discover'}>
            <Tab.Screen name="Recommend" component={RecommendScreen}
            listeners={{
                tabPress: ()=>{handleChangeInit('Discover');},
            }}
                options={{
                    title:'推荐',
                    tabBarIcon: ({focused})=>(
                        <View style={focused ? styles.bottomIcon : styles.focusedBottomIcon}>
                        {
                            focused ?
                            <Recommend width={20} height={20}/> :
                            <Recommend_b width={20} height={20} />
                        }
                        </View>
                    ),
                    tabBarActiveTintColor:'red',
                    tabBarInactiveTintColor:'#000',
                    headerShown: false,
                }}/>
            <Tab.Screen name="Discover" component={DiscoverScreen}
                listeners={{
                    tabPress: ()=>{handleChangeInit('Discover');},
                }}
                options={{
                    title:'发现',
                    tabBarIcon: ({focused})=>(
                        <View style={focused ? styles.bottomIcon : styles.focusedBottomIcon}>
                        {
                            focused ?
                            <Discover width={20} height={20}/> :
                            <Discover_b width={20} height={20} />
                        }
                        </View>
                ),
                tabBarActiveTintColor:'red',
                tabBarInactiveTintColor:'#000',
                headerShown: false,
                }}/>
            <Tab.Screen name="roam" component={RoamModal}
                listeners={{
                    tabPress: handleOpenModal,
                }}
                options={{
                    title: '漫游',
                    tabBarIcon: ({focused})=>(
                        <View style={focused ? styles.bottomIcon : styles.focusedBottomIcon}>
                        {
                            focused ?
                            <Roam width={20} height={20}/> :
                            <Roam_b width={20} height={20} />
                        }
                        </View>
                    ),
                    tabBarActiveTintColor:'red',
                    tabBarInactiveTintColor:'#000',
                    headerShown: false,
                }}/>
            <Tab.Screen name="Dynamic" component={DynamicScreen}
                listeners={{
                    tabPress: ()=>{handleChangeInit('Dynamic');},
                }}
                options={{
                    title:'动态',
                    tabBarIcon: ({focused})=>(
                    <View style={focused ? styles.bottomIcon : styles.focusedBottomIcon}>
                    {
                        focused ?
                        <Dynamic width={20} height={20}/> :
                        <Dynamic_b width={20} height={20} />
                    }
                    </View>
                ),
                tabBarActiveTintColor:'red',
                tabBarInactiveTintColor:'#000',
                headerShown: false,
                }}/>
            <Tab.Screen name="Own" component={OwnScreen}
                listeners={{
                    tabPress: ()=>{handleChangeInit('Own');},
                }}
                options={{
                    title:'我的',
                    tabBarIcon: ({focused})=>(
                    <View style={focused ? styles.bottomIcon : styles.focusedBottomIcon}>
                    {
                        focused ?
                        <Wode width={20} height={20}/> :
                        <Wode_b width={20} height={20} />
                    }
                    </View>
                ),
                tabBarActiveTintColor:'red',
                tabBarInactiveTintColor:'#000',
                headerShown: false,
                }}/>
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
  bottomIcon:{
    width: 25,
    height: 25,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  focusedBottomIcon:{
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
export default MainScreen;
