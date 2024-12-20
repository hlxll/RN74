import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Liebiao from '../../static/image/recommend/liebiao.svg';
import LeftUserModal from '../../container/LeftUserModal';
import styles from 'style.js';
const DiscoverScreen = ()=>{
  const [userModal, setUserModal] = useState(false);
  const [openTab, setOpenTab] = useState('');
  const ClickOpen = (type)=>{
    setOpenTab(type);
  };
    return(
        <View>
            <Liebiao style={styles.LieheadIcon}
            width={20}
            height={20}
            onPress={()=>{setUserModal(true);}}/>
            <View style={styles.tabList}>
                <View style={openTab === 'music' ? styles.openTab : styles.defaultTab }
                    onPress={()=>{ClickOpen('music');}}>音乐</View>
                <View style={openTab === 'Boke' ? styles.openTab : styles.defaultTab }
                onPress={()=>{ClickOpen('Boke');}}>博客</View>
                <View style={openTab === 'listen' ? styles.openTab : styles.defaultTab }
                onPress={()=>{ClickOpen('listen');}}>听书</View>
            </View>
            {
                userModal ?
                <LeftUserModal show={userModal} setUserModal={setUserModal}/> : ''
            }
        </View>
    );
};
export default DiscoverScreen;
