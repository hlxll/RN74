import { View, Animated, PanResponder, Dimensions } from 'react-native';
import React, { useRef } from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
const AudioListView = () =>{
    const animatedRef = useRef(new Animated.Value(0)).current;
    const PanResRef = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                animatedRef.setValue(0);
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    {//映射数据
                        dy: animatedRef,
                    },
                ],
                {
                    useNativeDriver: false,
                }
            ),
            onPanResponderRelease: () => {
                // animatedRef.flattenOffset();
            },
        })
    ).current;
    const {height, width} = Dimensions.get('window');
    const initAnimated = (event)=>{
        if(event.nativeEvent.layout.width < 100){
            return;
        }
        Animated.timing(animatedRef, {
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
                        transform: [{translateY: animatedRef}],
                    },
                ]}>
            <View style={styles.AudioListView}
                onLayout={initAnimated}>
                    <LinearGradient
                        colors={['#344094', '#a02843']}
                        start={{x: 0, y: 0}}
                        end={{x: 0, y: 1 }}
                        style={styles.audioHead}>
                        <View style={styles.audioListHead}>

                        </View>
                    </LinearGradient>
                    <View style={[
                        styles.autoListContent,
                        {
                            height: height * 0.7 - 150,
                        },
                    ]}>
                        <View {...PanResRef.panHandlers}
                            style={styles.moveIcon}>

                        </View>
                    </View>
            </View>
        </Animated.View>
    );
};
export default AudioListView;
