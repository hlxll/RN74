import { Button, Modal, View } from 'react-native';
import React from 'react';
import ToBottom from '../../static/image/xiangxia.svg';
const RoamScreen = ({showRoam, setShowRoam})=> {
    const handle_toBack = ()=>{
        setShowRoam(false);
    };
    return(
        <Modal visible={showRoam} animationType="slide">
            <View>
                <View>
                    <ToBottom onPress={handle_toBack} width={20} height={20}/>
                </View>
            </View>
        </Modal>
    );
};
export default RoamScreen;
