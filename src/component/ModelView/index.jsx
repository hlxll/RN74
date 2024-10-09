import React, { useEffect, useRef, useState } from 'react';
import { Animated, Button, Dimensions, FlatList, Modal, View } from 'react-native';
import styles from './styles.jsx';
import { Text } from 'react-native-svg';
import ToBottom from '../../static/image/xiangxia.svg';

const ModelView = ({visible, callback}) =>{
    const modelYNum = useRef(new Animated.Value(-Dimensions.get('window').height)).current;
    const [selectModel, setSelectModel] = useState(1);
    const modeldata = [
        {
            title: '默认模式',
            text: '沿着目前喜好继续聆听',
            id: 1,
        },
        {
            title: '熟悉模式',
            text: '喜欢过的歌曲与相似推荐',
            id: 2,
        },
        {
            title: '探索模式',
            text: '多元曲风与小众佳作',
            id: 3,
        },
    ];
    const modelList = [
        {
            icon: <ToBottom/>,
            title: '伤感',
            id: 4,
        },
        {
            icon: <ToBottom/>,
            title: '运动',
            id: 5,
        },
        {
            icon: <ToBottom/>,
            title: '助眠',
            id: 6,
        },
        {
            icon: <ToBottom/>,
            title: '放松',
            id: 7,
        },
        {
            icon: <ToBottom/>,
            title: '欢快',
            id: 8,
        },
    ];
    const openModel = () => {
        Animated.timing(modelYNum, {
            toValue: 0,
            duration: 10000,
            useNativeDriver: true,
        }).start(()=>{});
    };
    const pressModel = (item)=>{
        setSelectModel(item.id);
    };
    //动画效果不对
    const layoutView = (event)=>{
        let moveWidth = event.nativeEvent.layout.width;
        if( moveWidth > 100 && visible){
            openModel();
        }
    };
    return (
        <View style={styles.modelSelectAnimated} onLayout={layoutView}>
            <Animated.View style={[
                {
                    translateY: modelYNum,
                },
            ]}>
                <View style={styles.modelModal}>
                    <View style={styles.model_head}>
                        <Text>x</Text>
                        <View style={styles.model_head_cneter}>
                        <ToBottom onPress={callback}
                            style={styles.backICon}
                            width={10}
                            height={10}/>
                        </View>
                        <Button title="设置"/>
                    </View>
                </View>
                <FlatList data={modeldata}
                    renderItem={({item, index})=>{
                        return (
                            <View style={selectModel === item.id ? styles.flatItem : styles.flatItemSelect} key={index}
                            onPress={()=>{pressModel(item);}}>
                                <View style={styles.flattitle}>
                                    <Text style={styles.flatItemTitle}>{item.title}</Text>
                                </View>
                                <View style={styles.flattitle}>
                                    <Text style={styles.flatItemText}>{item.text}</Text>
                                </View>
                            </View>
                        );
                    }}/>
                <Text>场景模式</Text>
                <View style={styles.modelList}>
                    {
                        modelList.map((item, index) => {
                            return (
                                <View key={index} onPress={()=>{pressModel(item);}}
                                    style={selectModel === item.id ? styles.modelListItemSelect : styles.modelListItem}>
                                    <View>
                                        {item.icon}
                                    </View>
                                    <Text>
                                        {item.title}
                                    </Text>
                                </View>
                            );
                        })
                    }
                </View>
            </Animated.View>
        </View>
    );
};
export default ModelView;
