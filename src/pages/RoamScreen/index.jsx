import { Modal, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import ToBottom from '../../static/image/xiangxia.svg';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
// import RNPickerSelect from 'react-native-picker-select';
import ShareIcon from '../../static/image/share.svg';
const RoamScreen = ({showRoam, setShowRoam})=> {
    const [modelItems, setModalItems] = useState([]);
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
    },[]);
    const handle_toBack = ()=>{
        setShowRoam(false);
    };
    const handleModelChange = (value)=>{
        console.log(value);
    };
    return(
        <Modal visible={showRoam} animationType="slide" style={styles.roamScreen}>
            <LinearGradient
                colors={['#066ea5', '#01334c']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.roamScreen}>
                <View>
                    <View style={styles.head}>
                        <ToBottom onPress={handle_toBack} width={20} height={20}/>
                        
                        <ShareIcon width={20} height={20}/>
                    </View>
                </View>
            </LinearGradient>
        </Modal>
    );
};
export default RoamScreen;
