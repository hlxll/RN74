import React, { useEffect, useRef } from 'react';
import { Animated, Button, Dimensions, FlatList, View } from 'react-native';
import styles from './styles.jsx';
import { Text } from 'react-native-svg';
import ToBottom from '../../static/image/xiangxia.svg';

const ModelView = ({visible, callback}) =>{
    const modelYNum = useRef(new Animated.Value(0));
    const modeldata = [
        {
            title: '默认模式',
            text: '沿着目前喜好继续聆听'
        },
    ]
    useEffect(()=>{
        if(visible){
            openModel();
        }
    }, [visible]);
    const openModel = () => {
        modelYNum.current = -Dimensions.get('window').height;
        Animated.timing(modelYNum.current, {
            toValue: 0,
            duration: 10000,
            useNativeDriver: true,
        }).start(()=>{});
    };
    const fun_toRoam = ()=>{
        callback();
    };
    return (
        <View>
            <Animated.View style={[
                {
                    translateY: modelYNum.current,
                },
            ]}>
                <View style={styles.modelModal}>
                    <View style={styles.model_head}>
                        <Text>x</Text>
                        <View style={styles.model_head_cneter}>
                        <ToBottom onPress={fun_toRoam}
                            style={styles.backICon}
                            width={10}
                            height={10}/>
                        </View>
                        <Button>设置</Button>
                    </View>
                </View>
                <FlatList data={modeldata}
                    renderItem={(props)=>{
                        return (
                            <View>
                                <Text></Text>
                                <Text></Text>
                            </View>
                        );
                    }}/>
            </Animated.View>
        </View>
    )
};
export default ModelView;
