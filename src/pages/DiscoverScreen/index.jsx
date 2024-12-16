import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Liebiao from '../../static/image/recommend/liebiao.svg';
import LeftUserModal from '../../container/LeftUserModal';
import styles from 'style.less'
const DiscoverScreen = ()=>{
  const [userModal, setUserModal] = useState(false);
    return(
        <View>
            <Liebiao style={styles.LieheadIcon}
            width={20}
            height={20}
            onPress={()=>{setUserModal(true);}}/>
            <View>
                <View>音乐</View>
                <View>博客</View>
                <View>听书</View>

            </View>
            {
                userModal ?
                <LeftUserModal show={userModal} setUserModal={setUserModal}/> : ''
            }
        </View>
    );
};
export default DiscoverScreen;
