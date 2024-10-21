import { View, Animated, PanResponder, Dimensions, Text } from 'react-native';
import React, { useEffect, useRef } from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
const AudioListView = () =>{
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            pan.setOffset({
                x: pan.x._value,
                y: pan.y._value
            });
        },
        onPanResponderMove: Animated.event(
            [
            null,
            { dx: pan.x, dy: pan.y }
            ]
        ),
        onPanResponderRelease: () => {
            pan.flattenOffset();
        }
        })
    ).current;

    const {height, width} = Dimensions.get('window');
    const initAnimated = (event)=>{
        if(event.nativeEvent.layout.width < 100){
            return;
        }
        Animated.timing(pan.y, {
            toValue: -height * 0.7,
            duration: 3000,
            useNativeDriver: true,
        }).start(()=>{
            // animatedRef.setValue(0);
        });
    };
    return(
        <Animated.View
                style={[
                    styles.audioAnimated,
                    {
                        width: width,
                        height: height * 0.7 + 20,
                        transform: [{translateY: pan.y}],
                    },
                ]}
                {...panResponder.panHandlers}>
            <View style={styles.AudioListView}
                onLayout={initAnimated}>
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
                        <View style={styles.moveIcon}/>
                            <View style={styles.audioContent}>

                        </View>
                    </View>
            </View>
        </Animated.View>
    );
};
export default AudioListView;
