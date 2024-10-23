import { Animated, Image, Modal, View, Text, Button, Dimensions, Alert } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import ToBottom from '../../static/image/xiangxia.svg';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import ShareIcon from '../../static/image/share.svg';
import Erji from '../../static/image/erji.svg';
import Download from '../../static/image/xiazai.svg';
import MoreZero from '../../static/image/shenglvehao.svg';
import EmailIcon from '../../static/image/xinxi.svg';
import LoveIcon from '../../static/image/aixintubiao.svg';
import ModelView from '../../component/ModelView';
import MusicPlayer from '../../container/MusicPlayer';
import AudioListView from '../../component/AudioListView/index';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setScreen, setAudioListOpen } from '../../model/reducers';
// import Picker from 'react-native-picker-select';
const RoamScreen = (props)=> {
    const dispatch = useDispatch();
    const {audioListOpen} = useSelector(state=>{
        return state.playerReducer;
    })
    const [modelItems, setModalItems] = useState([]);
    const [follow, setFollow] = useState(true);
    const moveTextRef = useRef();
    // 关闭弹窗，这里初始化
    const [modelModal, setModelModal] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [audioList, setAudioList] = useState(false);
    const navigation = useNavigation();
    let autoMoveId;
    useEffect(()=>{
        setModalItems([
            {
                label: '私人漫游 . 默认模式',
                value: '1',
            },
            {
                label: '私人漫游 . 私人模式',
                value: '2',
            },
            {
                label: '私人漫游 . 帮助模式',
                value: '3',
            },
        ]);
        return()=>{
            clearInterval(autoMoveId);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    useEffect(()=>{
        setAudioList(audioListOpen);
    }, [audioListOpen])
    //!useEffect启动动画，组件还没准备好会报错,轮播图
    const AutoMove = (width)=>{
        Animated.timing(fadeAnim, {
            toValue: -width,
            duration: 10000,
            useNativeDriver: true,
        }).start(()=>{
            fadeAnim.setValue(0);
        });
    };
    const handle_toBack = ()=>{
        dispatch(setScreen());
        navigation.goBack();
    };
    const handleLayoutMove = (event)=>{
        let moveWidth = event.nativeEvent.layout.width;
        if( moveWidth > 100){
            autoMoveId = setInterval(()=>{
                AutoMove(Math.floor(moveWidth) + 100);
            },11000);
        }
    };
    const followUser = ()=>{
        setFollow(false);
    };
    const fun_openModelModal = ()=>{
        clearInterval(autoMoveId);
        setModelModal(true);
    };
    const clickMusicPlay = (type)=>{
        if(type === 'openAudioList'){
            setAudioList(true);
            dispatch(setAudioListOpen());
        }
    };
    const closeAudioList = ()=>{
        setAudioList(false);
    };
    return(
        <View>
            {
                modelModal ?
                <ModelView visible={modelModal}
                    callback={()=>{setModelModal(false);}}/> :
                <LinearGradient
                    colors={['#066ea5', '#01334c']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={styles.roamScreen}>
                    <View style={styles.linearGradModal}
                    >
                        <View style={styles.head}>
                            <ToBottom onPress={handle_toBack}
                                style={styles.backICon}
                                width={20}
                                height={20}/>
                            <View style={styles.centerHead}>
                                <Text style={styles.centertext}
                                    onPress={fun_openModelModal}>
                                        私人漫游 . 默认模式
                                </Text>
                                <ToBottom onPress={fun_openModelModal}
                                    style={styles.backICon}
                                    width={10}
                                    height={10}/>
                            </View>
                            <ShareIcon width={20}
                            onPress={closeAudioList}
                                height={20}
                                style={styles.rightUrl}/>
                        </View>
                        <Image source={require('../../static/image/roamBack.png')}
                            style={styles.roamBackImage}
                            resizeMode="contain"/>
                        <View style={styles.musicPlay}>
                            <View style={styles.leftDetail}>
                                <View style={[styles.textMove]}>
                                    <Animated.View style={[
                                        styles.animatedStyle,
                                        {
                                            translateX: fadeAnim,
                                        },
                                    ]}>
                                        <Text style={styles.textMoveText} numberOfLines={1}
                                            ref={moveTextRef} onLayout={handleLayoutMove}>
                                            My songs know What You Did The Dark(Light Em Up)
                                        </Text>
                                        <View style={styles.moveCenterView}/>
                                        <Text style={styles.textMoveText} numberOfLines={1}
                                            ref={moveTextRef} onLayout={handleLayoutMove}>
                                            My songs know What You Did The Dark(Light Em Up)
                                        </Text>
                                    </Animated.View>
                                </View>
                                <View style={styles.nameFollowView}>
                                    <Text style={styles.userFollow}>
                                        黄林&nbsp;
                                    </Text>
                                    {
                                        follow ?
                                        <View style={styles.userFollText}>
                                            <Text style={styles.userFollowContent}
                                                onPress={followUser}>关注</Text>
                                        </View> :
                                        <Text style={styles.userFollTextIcon}>
                                            {'>'}
                                        </Text>
                                    }
                                </View>
                            </View>
                            <View style={styles.rightIcon}>
                                <View style={styles.column}>
                                    <LoveIcon width={30}
                                    height={30}/>
                                    <Text style={styles.rightTopText}>7.7w</Text>
                                </View>
                                <View style={styles.column}>
                                    <EmailIcon width={30}
                                        height={30}/>
                                    <Text style={styles.rightTopText}>999+</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.musicPlugin} id="musicPlugin">
                            <MusicPlayer onCallback={clickMusicPlay}/>
                            {/* <Button onPress={playTrack} title="player"/> */}
                        </View>
                        <View style={styles.footerIcon}>
                            <View  style={styles.column}>
                                <Erji width={20}
                                height={20}/>
                            </View>
                            <View  style={styles.column}>
                            <Download width={20}
                                height={20}/>
                            </View>
                            <View  style={styles.column}>
                            <MoreZero width={20}
                                height={20}/>
                            </View>
                        </View>
                    </View>
                    {
                        audioList ?
                        <AudioListView style={styles.audioViewModal}/> : ''
                    }
                </LinearGradient>
            }
        </View>
    );
};
export default RoamScreen;
