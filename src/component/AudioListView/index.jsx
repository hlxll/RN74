import { View } from 'react-native';
import React from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
const AudioListView = () =>{
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

            </View>
        </View>
    );
};
export default AudioListView;