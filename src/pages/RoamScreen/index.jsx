import { Animated, Image, Modal, View, Text } from 'react-native';
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


const RoamScreen = ({showRoam, setShowRoam})=> {
    const [modelItems, setModalItems] = useState([]);
    const [follow, setFollow] = useState(false);
    const moveTextRef = useRef();
    const moveWidth = useRef(0);//获取移动文本宽度
    const fadeAnim = useRef(new Animated.Value(0)).current;
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
        setTimeout(()=>{
            AutoMove();
        },1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    //!useEffect启动动画，组件还没准备好会报错
    const AutoMove = ()=>{
        Animated.timing(fadeAnim, {
            toValue: 10,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    };
    const handle_toBack = ()=>{
        setShowRoam(false);
    };
    const handleLayoutMove = (event)=>{
        moveWidth.current = event.nativeEvent.layout.width;
    };
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
                        <View style={styles.centerHead}/>
                        <ShareIcon width={20}
                            height={20}
                            style={styles.rightUrl}/>
                    </View>
                    <Image source={require('../../static/image/roamBack.png')}
                        style={styles.roamBackImage}
                        resizeMode="contain"/>
                    <View style={styles.musicPlay}>
                        <View style={styles.leftDetail}>
                            <View style={[styles.textMove,{
                                opacity: fadeAnim.current,
                            }]}>
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
                                </Animated.View>
                            </View>
                            <Text style={styles.userFollow}>
                                黄林
                                <Text>
                                    {
                                        follow ? '关注' : '>'
                                    }
                                </Text>
                            </Text>
                        </View>
                        <View style={styles.rightIcon}>
                            <View style={styles.column}>
                                <LoveIcon width={30}
                                height={30}/>
                            </View>
                            <View style={styles.column}>
                                <EmailIcon width={30}
                                    height={30}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.musicPlugin} id="musicPlugin" />
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
            </LinearGradient>
        </Modal>
    );
};
export default RoamScreen;
