/* eslint-disable react/react-in-jsx-scope */
import { View } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import StopIcon from '../../static/image/24gf-pause2.svg';
import LinkExport from '../../static/image/fenxianglianjie.svg';
import StartIcon from '../../static/image/qidong.svg';
import BackRow from '../../static/image/zuofanye.svg';
import BackRowDis from '../../static/image/zuofanyeDis.svg';
import ListIcon from '../../static/image/liebiao.svg'
import styles from './styles';
import { useEffect, useRef, useState } from 'react';
import Slider from '@react-native-community/slider';
const MusicPlayer = () =>{
    const [num, setNum] = useState(0);
    const [isPlayerInit, setIsPlayerInit] = useState(false);
    const [playerStatus, setPlayerStatus] = useState(false);//开始停止
    let playerDuration = useRef();

    useEffect(()=>{
        setTimeout(async ()=>{
            if(!isPlayerInit){
                await setupPlayer();
            }
            addTrack();
        },3000);
        TrackPlayer.addEventListener('playback-state', GetPlayerStatus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const GetPlayerStatus = async (data)=>{
        let res = await TrackPlayer.getPosition();//播放进度
        if(res <= 0.1){
            stopPlayer();
        }
        console.log(res);
    };
    const setupPlayer = async ()=>{
        setIsPlayerInit(true);
        await TrackPlayer.setupPlayer().catch(err=>{
            console.error(err);
        });
    };
    const numChange = (data)=>{
        setNum(data);
    };
    const addTrack = async ()=>{
        var track1 = {
            url: require('../../static/music/warning.mp3'), // Load media from the network
            title: 'Avaritia',
            artist: 'deadmau5',
            album: 'while(1<2)',
            duration: 402, // Duration in seconds
        };
        await TrackPlayer.add([track1]);
    };
    const startPlayer = ()=>{
        setPlayerStatus(true);
        TrackPlayer.play();
    };
    const stopPlayer=()=>{
        setPlayerStatus(false);
        TrackPlayer.pause();
    };
    return (
        <View>
            <Slider
                // eslint-disable-next-line react-native/no-inline-styles
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
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
                <ListIcon width={25} height={25}/>
            </View>
        </View>
    )
}
export default MusicPlayer;