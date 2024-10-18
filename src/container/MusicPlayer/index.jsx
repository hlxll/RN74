/* eslint-disable react/react-in-jsx-scope */
import { View } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import StopIcon from '../../static/image/24gf-pause2.svg';
import LinkExport from '../../static/image/fenxianglianjie.svg';
import StartIcon from '../../static/image/qidong.svg';
import BackRow from '../../static/image/zuofanye.svg';
import BackRowDis from '../../static/image/zuofanyeDis.svg';
import ListIcon from '../../static/image/liebiao.svg';
import styles from './styles';
import { useEffect, useState } from 'react';
import Slider from '@react-native-community/slider';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../model/reducers';
const MusicPlayer = (props) =>{
    const [num, setNum] = useState(0);
    const [isPlayerInit, setIsPlayerInit] = useState(false);
    const [playerStatus, setPlayerStatus] = useState(false);//开始停止
    const [maxiNumVal, setMaxiNumVal] = useState(0);
    const {initPlayer} = useSelector(state => {
        return state.playerReducer.initPlayer;
    });
    const dispatch = useDispatch();
    useEffect(()=>{
        setTimeout(async ()=>{
            console.log(initPlayer);
            if(!isPlayerInit){
                console.log('初始化');
                await setupPlayer();
            }else{
                TrackPlayer.seekTo(0);
            }
            addTrack();
        },3000);
        TrackPlayer.addEventListener('playback-state', GetPlayerStatus);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const GetPlayerStatus = async (data)=>{
        let res = await TrackPlayer.getProgress();//播放进度
        console.log(res);
        //position:播放位置
        //duration:总共时间
        //buffered:缓冲位置
        if(res.position >= res.duration){
            setPlayerStatus(false);
            TrackPlayer.pause();
            TrackPlayer.seekTo(0);
            console.log('关闭播放');
        }
    };
    const setupPlayer = async ()=>{
        setIsPlayerInit(true);
        dispatch(increment());
        await TrackPlayer.setupPlayer();
    };
    const numChange = (data)=>{
        setNum(data);
        TrackPlayer.seekTo(1);
    };
    const addTrack = async ()=>{
        var track1 = {
            url: require('../../static/music/warning.mp3'), // Load media from the network
            title: 'Avaritia',
            artist: 'deadmau5',
            album: 'while(1<2)',
            duration: 10, // Duration in seconds
        };
        await TrackPlayer.add([track1]);
    };
    const startPlayer = async()=>{
        let res = await TrackPlayer.getProgress();
        setMaxiNumVal(Math.ceil(res.duration));
        setPlayerStatus(true);
        TrackPlayer.play();
        let i = 0;
        let ids = setInterval(()=>{
            if(i >= Math.ceil(res.duration)){
                setNum(Math.ceil(res.duration));
                clearInterval(ids);
            }else{
                setNum(i);
            }
            i++;
        },1000);
    };
    const stopPlayer = ()=>{
        setPlayerStatus(false);
        TrackPlayer.pause();
    };
    const openAudioList = ()=>{
        props.onCallback('openAudioList');
    };
    return (
        <View>
            <Slider
                // eslint-disable-next-line react-native/no-inline-styles
                style={{ width: '100%', height: 40 }}
                minimumValue={0}
                maximumValue={maxiNumVal}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#ddd"
                value={num}
                onValueChange={(newValue) => numChange(newValue)}
                />
            <View style={styles.allbtn}>
                <LinkExport width={25} height={25} style={styles.linkIcon}/>
                <BackRowDis width={25} height={25} style={styles.leftNext}/>
                {
                    playerStatus ?
                    <StopIcon width={25} height={25} onPress={stopPlayer}/> :
                    <StartIcon width={25} height={25} onPress={startPlayer}/>
                }
                <BackRow width={25} height={25} style={styles.rightNext}/>
                <ListIcon width={25} height={25} onPress={openAudioList}/>
            </View>
        </View>
    );
};
export default MusicPlayer;
