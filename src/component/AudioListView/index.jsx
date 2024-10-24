import { View, Animated, PanResponder, Dimensions, Text, FlatList } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import { setAudioListOpen } from '../../model/reducers';

const AudioListView = () =>{
    const {height, width} = Dimensions.get('window');
    const dispatch = useDispatch();
    const pan = useRef(new Animated.ValueXY()).current;
    const [ownTab, setOwnTab] = useState(1);
    const [audioList, setAudioList] = useState([]);//音乐列表
    let nowY = '';
    pan.addListener(function({x, y}){
        if(y > (-height * 0.5) && nowY < y){
            pan.setOffset({
                x: pan.x._value,
                y: 0,
            });
            dispatch(setAudioListOpen());
        }
        nowY = y;
    });
    useEffect(()=>{
        setAudioList([
            {
                vip: true,
                name: '月光',
                people: '胡彦斌',
            },
            {
                vip: false,
                name: '张然',
                people: 'Lunhui',
            },
        ]);
        setTimeout(()=>{
            initAnimated();
        },100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value,
                });
                pan.setValue({
                    x: 0,
                    y: 0,
                });
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    { dx: pan.x, dy: pan.y },
                ],
                {
                    useNativeDriver: false,
                }
            ),
            onPanResponderRelease: (evt, gest) => {
                if(pan.y < (-(height * 0.5))){
                    console.log('恢复');
                    initAnimated(500);
                }
                pan.flattenOffset();
            },
        })
    ).current;
    const initAnimated = (time)=>{
        Animated.timing(pan.y, {
            toValue: -height * 0.7,
            duration: time || 3000,
            useNativeDriver: true,
        }).start(()=>{});
    };
    const selectTab = (type)=>{
        console.log(type);
        
        setOwnTab(type);
    };
    return(
        <View style={styles.container}>
            <Animated.View
                    style={[
                        styles.audioAnimated,
                        {
                            width: width,
                            height: height * 0.7 + 20,
                            transform: [{translateY: pan.y}],
                        },
                    ]}
                    >
                <View style={styles.AudioListView}>
                        <LinearGradient
                            colors={['#344094', '#a02843']}
                            start={{x: 0, y: 0}}
                            end={{x: 0, y: 1 }}
                            style={styles.audioHead}>
                            <View style={styles.audioListHead}>
                                <View style={styles.leftText}>
                                    <Text style={styles.leftTextOne}>
                                        开启私人DJ，感受陪伴听歌
                                    </Text>
                                    <Text style={styles.leftTextTwo}>
                                        沉浸式感受雨天氛围感</Text>
                                </View>
                                <View style={styles.startAudio}>
                                    <Text style={styles.startAudioText}>
                                        开启
                                    </Text>
                                </View>
                            </View>
                        </LinearGradient>
                        <View style={[
                            styles.autoListContent,
                            {
                                height: height * 0.7 - 150,
                            },
                        ]}>
                            <View style={styles.moveView}
                                {...panResponder.panHandlers}>
                                <View style={styles.moveIcon}/>
                            </View>
                            <View style={styles.audioContent}>
                                <View style={styles.tabList}>
                                    <View style={ownTab === 1 ? styles.clickedTab : styles.defaultTab} >
                                        <Text onPress={()=>{
                                            selectTab(1);
                                        }} style={
                                            ownTab === 1 ? styles.clickedText : styles.defaultText
                                        }>当前播放</Text>
                                        <Text style={styles.rightTopNum}>22</Text>
                                    </View>
                                    <View style={ownTab === 2 ? styles.clickedTab : styles.defaultTab}>
                                        <Text onPress={()=>{
                                            selectTab(2);
                                        }} style={
                                            ownTab === 2 ? styles.clickedText : styles.defaultText
                                        }>历史播放</Text>
                                    </View>
                                </View>
                                <View style={styles.flatListAll}>
                                    <FlatList
                                    data={audioList}
                                    renderItem={({item})=>{
                                        return <View style={styles.flatItem}>
                                            {
                                                item.vip ?
                                                <View style={styles.flatVip}>
                                                    <Text style={styles.vipText}>VIP</Text>
                                                </View> : ''
                                            }
                                            <Text style={styles.flatName}>{item.name}</Text>
                                            <Text style={styles.flatPeople}>
                                                &nbsp;·&nbsp;{item.people}
                                            </Text>
                                            <Text style={styles.closeFlat}>
                                                X
                                            </Text>
                                        </View>;
                                    }}
                                    keyExtractor={item=>item.id}/>
                                </View>
                            </View>
                        </View>
                </View>
            </Animated.View>
        </View>
    );
};
export default AudioListView;
