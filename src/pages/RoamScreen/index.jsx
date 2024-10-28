import { Animated, Image, Modal, View, Text, Button, PermissionsAndroid, Platform } from 'react-native';
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
import DownloadOpen from '../../static/image/downloadIcon.svg';
import ModelView from '../../component/ModelView';
import MusicPlayer from '../../container/MusicPlayer';
import AudioListView from '../../component/AudioListView/index';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setScreen, setAudioListOpen } from '../../model/reducers';
import RNFetchBlob from 'rn-fetch-blob';
import { fetch } from '@react-native-community/netinfo';
import { downloadFile, MainBundlePath, DocumentDirectoryPath } from 'react-native-fs';
const RoamScreen = (props)=> {
    const dispatch = useDispatch();
    const {audioListOpen} = useSelector(state=>{
        return state.playerReducer;
    });
    const [modelItems, setModalItems] = useState([]);
    const [follow, setFollow] = useState(true);
    const moveTextRef = useRef();
    // 关闭弹窗，这里初始化
    const [modelModal, setModelModal] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [audioList, setAudioList] = useState(false);
    const [downloadOpen, setDownloadOpen] = useState(false);
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
    }, [audioListOpen]);
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
        console.log('关闭');
    };
    //请求权限
    const requestStoragePermission = async ()=>{
        if(Platform.OS === 'android'){
            try{
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission Needed',
                        message: 'this app needs access to your storage',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    }
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            }catch(err){
                console.log(err);
                return false;
            }
        }else{
            return true;
        }
    };
    const downloadMp3ToGallery = async (url) => {
        const hasPermission = await requestStoragePermission();

        if (!hasPermission) {
          alert('Storage permission is required to download the file.');
          return;
        }

        const { config, fs } = RNFetchBlob;
        const date = new Date();
        const PictureDir = fs.dirs.PictureDir; // 获取设备上的图片目录
        const filename = `music_${Math.floor(date.getTime() + date.getSeconds() / 2)}.mp3`;
        const filePath = `${PictureDir}/${filename}`;

        config({
          fileCache: true,
          appendExt: 'mp3',
          addAndroidDownloads: {
            useDownloadManager: true, // 使用 Android 的下载管理器
            notification: true,
            path: filePath,
            description: 'Downloading mp3.',
          },
        })
        .fetch('GET', url)
        .then((res) => {
          console.log('The file saved to ', res.path());
          // 文件已经下载完，并保存到相册
        })
        .catch((error) => {
          console.error(error);
        });
      };
    const openDownloadModal = ()=>{
        fetch().then(state => {
            if(true || state.type === 'wifi'){
                //只可以下载http或https的资源
                const mp3URL = '../../static/music/warning.mp3';
                downloadMp3ToGallery(mp3URL);
            }else{
                setDownloadOpen(true);
            }
        });
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
                                height={20}
                                style={styles.rightUrl}/>
                        </View>
                        <Image source={require('../../static/image/roamBack.png')}
                            style={styles.roamBackImage}
                            onPress={closeAudioList}
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
                                height={20}
                                onPress={openDownloadModal}/>
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
            <Modal
                visible={downloadOpen}
                transparent={true}
                animationType="none">
                <View style={styles.downloadModalView}>
                    <DownloadOpen width={50}/>
                    <Text style={styles.tipText}>流量提醒</Text>
                    <Text>
                        当前处于非WIFI网络，下载将消耗较多流量,是否使用流量下载?
                    </Text>
                    <View style={styles.doanBtnView}>
                        <Button title="免流下载"
                            color="red"
                            style={styles.downloadBtnText}/>
                    </View>
                    <Text style={styles.doanloadText}>使用流量下载</Text>
                </View>
            </Modal>
        </View>
    );
};
export default RoamScreen;
