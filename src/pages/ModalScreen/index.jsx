import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';


const ModalScreen = ()=>{
    const navigation = useNavigation();
    const {isChangeScreen} = useSelector(state => {
        return state.playerReducer;
    });
    useFocusEffect(
        useCallback(()=>{
            let routeParam = navigation.getState();
            console.log(routeParam.routes[routeParam.index].params.type);
            if(isChangeScreen){
                navigation.navigate(routeParam.routes[routeParam.index].params.type);
            }else{
                // navigation.goBack();
            }
        },[isChangeScreen, navigation])
    );
    return (
        <View />
    );
};
export default ModalScreen;
