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
    const position = useRef(new Animated.Value(0)).current;
    const [ownTab, setOwnTab] = useState(1);
    const [audioList, setAudioList] = useState([]);//音乐列表
    let nowY = '';
    let lastDispatch = false;
    let moveStartY = useRef(0).current;
    //这里监听值内部改变值，会产生递归
    const panAddId = pan.addListener(function({x, y}){
        if(y > (-height * 0.5) && nowY < y && !lastDispatch){
            lastDispatch = true;
            pan.setValue({
                x: pan.x._value,
                y: 0,
            });
            dispatch(setAudioListOpen());
            pan.removeListener(panAddId);
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
            onPanResponderGrant: (evt, gest) => {
                //!下方的Animated之后再设置偏移，有一瞬间pan.y的值改变很大
                moveStartY = pan.y._value;
                // pan.setOffset({
                //     x: pan.x._value,
                //     y: moveStartY,
                // });
                pan.setValue({
                    x: 0,
                    y: 0,
                });
                pan.setOffset({
                    x: pan.x._value,
                    y: -height * 0.7,
                });
                
            },
            onPanResponderMove: (evt, state)=>{
                const newY = moveStartY + state.dy;
                if(newY >= (-height * 0.7)){
                    pan.setValue({
                        x: pan.x._value,
                        y: state.dy,
                    });
                }
            },
            onPanResponderRelease: (evt, state) => {
                const newY = moveStartY + state.dy;
                if(newY < (-(height * 0.5))){
                    pan.flattenOffset();
                    initAnimated(500);
                }
            },
        })
    ).current;
    //拖动后触发了这个动画就会在下次拖动开始发生闪烁
    const initAnimated = (time)=>{
        let ids = setInterval(()=>{
            if(pan.y._value <= (-height * 0.7)){
                clearInterval(ids);
            }else{
                pan.setValue({
                    x: pan.x._value,
                    y: pan.y._value - 2,
                });
            }
        }, 100);
        // Animated.timing(pan.y, {
        //     toValue: -height * 0.7,
        //     duration: time || 3000,
        //     useNativeDriver: true,
        // }).start(()=>{
        //     // pan.setOffset({
        //     //     x: 0,
        //     //     y: 0,
        //     // });
        //     pan.setValue({
        //         x: pan.x._value,
        //         y: -height * 0.7,
        //     });
        // });
    };
    const selectTab = (type)=>{
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
