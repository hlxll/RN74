import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, Text, TouchableHighlight, View } from 'react-native';
import styles from './styles.jsx';
import ToBottom from '../../static/image/xiangxia.svg';
import Fangsongmoshi from '../../static/image/fangsongmoshi.svg'
import Huankuai from '../../static/image/huankuai.svg';
import Crouing from '../../static/image/crouing.svg';
import Yundong from '../../static/image/yundong.svg';
import Zhumian from '../../static/image/zhumian.svg'
const {height} = Dimensions.get('window');
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
            icon: <Crouing width={30} height={30}/>,
            title: '伤感',
            id: 4,
        },
        {
            icon: <Yundong width={30} height={30}/>,
            title: '运动',
            id: 5,
        },
        {
            icon: <Zhumian width={30} height={30}/>,
            title: '助眠',
            id: 6,
        },
        {
            icon: <Fangsongmoshi width={30} height={30}/>,
            title: '放松',
            id: 7,
        },
        {
            icon: <Huankuai width={30} height={30}/>,
            title: '欢快',
            id: 8,
        },
    ];
    const openModel = () => {
        Animated.timing(modelYNum, {
            toValue: 0,
            duration: 1000,
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
                    <Text style={styles.closeIcon} onPress={callback}>x</Text>
                    <View style={styles.model_head_cneter}>
                        <Text style={styles.centerText}>
                            私人漫游 . 熟悉模式&nbsp;
                        </Text>
                        <ToBottom onPress={callback}
                            style={styles.centerIcon}
                            width={10}
                            height={10}/>
                    </View>
                    <View style={styles.rightSet}>
                        <Text style={styles.setText}>设置</Text>
                    </View>
                </View>
                <FlatList data={modeldata}
                    renderItem={({item, index})=>{
                        return (
                            <View style={
                                    selectModel === item.id ?
                                    styles.flatItemSelect :
                                    styles.flatItem}
                                key={index}
                                >
                                <View style={styles.flattitle}>
                                    <Text style={styles.flatItemTitle}
                                    onPress={()=>{pressModel(item);}}>
                                        {item.title}
                                    </Text>
                                </View>
                                <View style={styles.flattitle}>
                                    <Text style={styles.flatItemText}
                                    onPress={()=>{pressModel(item);}}>
                                        {item.text}
                                    </Text>
                                </View>
                            </View>
                        );
                    }}/>
                <Text style={styles.trainModel}>场景模式</Text>
                <View style={[
                    styles.modelList,
                    {
                        height: height - 450,
                    },
                ]}>
                    {
                        modelList.map((item, index) => {
                            return (
                                <TouchableHighlight style={styles.modelListIndex} key={item.id}
                                    onPress={()=>{pressModel(item);}}>
                                     <View key={index}
                                        style={selectModel === item.id ? styles.modelListItemSelect : styles.modelListItem}>
                                        <View>
                                            {item.icon}
                                        </View>
                                        <Text style={styles.modelListText}>
                                            {item.title}
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            );
                        })
                    }
                </View>
            </Animated.View>
        </View>
    );
};
export default ModelView;
