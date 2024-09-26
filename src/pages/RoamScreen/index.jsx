import { Animated, Image, Modal, View, Text } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import ToBottom from '../../static/image/xiangxia.svg';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import ShareIcon from '../../static/image/share.svg';
// import TagSelect from 'react-native-tag-select';
const RoamScreen = ({showRoam, setShowRoam})=> {
    const [modelItems, setModalItems] = useState([]);
    const [follow, setFollow] = useState(false)
    const moveTextRef = useRef()
    const [leftMove, setLeftMove] = useState(0)//移动宽度
    const moveWidth = useRef(0)//获取移动文本宽度
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
        let ids = setInterval(()=>{
            AutoMove()
        },3000)
        return () =>{
            clearInterval(ids)
        }
    },[]);
    const AutoMove = ()=>{
        console.log(moveTextRef.current);
        Animated.timing(leftMove, {
            toValue: 100,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }
    const handle_toBack = ()=>{
        setShowRoam(false);
    };
    const handleLayoutMove=(event)=>{
        moveWidth.current = event.nativeEvent.layout.width;
    }
    return(
        <Modal visible={showRoam} 
            animationType="slide" 
            style={styles.roamScreen}>
            <LinearGradient
                colors={['#066ea5', '#01334c']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.roamScreen}>
                <View>
                    <View style={styles.head}>
                        <ToBottom onPress={handle_toBack}
                            style={styles.backICon} 
                            width={20} 
                            height={20}/>
                        {/* <TagSelect data={modelItems} type={'default'}/> */}
                        <View style={styles.centerHead}></View>
                        <ShareIcon width={20} 
                            height={20} 
                            style={styles.rightUrl}/>
                    </View>
                    <Image source={require('../../static/image/roamBack.png')} 
                        style={styles.roamBackImage}
                        resizeMode='contain'/>
                    <View style={styles.musicPlay}>
                        <View style={styles.leftDetail}>
                            <View style={styles.textMove}>
                                <Text style={{marginLeft: -leftMove, ...styles.textMoveText}} 
                                    ref={moveTextRef} 
                                    onLayout={handleLayoutMove}>
                                    My songs know What You Did The Dark(Light Em Up)
                                </Text>
                            </View>
                            <Text style={styles.userFollow}>
                                黄林
                                <Text>
                                    {
                                        follow?'关注':'>'
                                    }
                                </Text>
                            </Text>
                        </View>
                        <View style={styles.rightIcon}></View>
                    </View>
                    <View style={styles.musicPlugin}></View>
                    <View style={styles.footerIcon}>
                        
                    </View>
                </View>
            </LinearGradient>
        </Modal>
    );
};
export default RoamScreen;
