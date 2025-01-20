import React, { Alert, Button, View } from 'react-native';
import styles from './css.jsx';
const EjectCom = ()=>{
    const OpenAlert = ()=>{
        Alert.alert(
            '标题',
            'alert content',
            [
                {
                    text: 'Cancel',
                    onPress: ()=> console.log('close alert'),
                    style: 'cancel',
                },
                {
                    text:'Ok',
                    onPress:()=>console.log('alert OK'),
                },
            ]
        );
    };
    return (
        <View className={styles.ejectComMain}>
            <Button onPress={OpenAlert}>打开alert</Button>
        </View>
    );
};

export default EjectCom;
