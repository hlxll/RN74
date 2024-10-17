import { View, Animated, PanResponder } from 'react-native';
import React, { useRef } from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
const AudioListView = () =>{
    const animatedRef = useRef(new Animated({x: 0, y: 0})).current;
    const PanResRef = PanResponder.create({
        onPanResponderMove: Animated.event(
            [
                null,
                {
                    dx: animatedRef.x,//映射数据
                    dy: animatedRef.y,
                },
            ],
            {
                useNativeDriver: false,
            }
        ),
    });
    return(
        <View style={styles.AudioListView}>
            <LinearGradient
                colors={['#344094', '#a02843']}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1 }}
                style={styles.audioHead}>
                <View style={styles.audioListHead}>

                </View>
            </LinearGradient>
            <View style={styles.autoListContent}>
                <View {...PanResRef.current}>

                </View>
            </View>
        </View>
    );
};
export default AudioListView;
