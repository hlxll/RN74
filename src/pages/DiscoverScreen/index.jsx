import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Liebiao from '../../static/image/recommend/liebiao.svg';
import SearchIcon from '../../static/image/recommend/ic_search24px.svg';
import LeftUserModal from '../../container/LeftUserModal';
import styles from './style.jsx';
const DiscoverScreen = ()=>{
  const [userModal, setUserModal] = useState(false);
  const [openTab, setOpenTab] = useState('');
  const ClickOpen = (type)=>{
    setOpenTab(type);
  };
    return(
        <View style={styles.DiscoverScreenMain}>
            <View style={styles.tabList}>
                <Liebiao style={styles.LieheadIcon}
                width={20}
                height={20}
                onPress={()=>{setUserModal(true);}}/>
                <View style={openTab === 'music' ? styles.openTab : styles.defaultTab }
                    onStartShouldSetResponder={()=>true}
                    onResponderRelease={()=>{ClickOpen('music');}}>
                    <Text  style={openTab === 'music' ? styles.tabListTextClick : styles.tabListText}>音乐</Text>
                </View>
                <View style={openTab === 'Boke' ? styles.openTab : styles.defaultTab }
                    onStartShouldSetResponder={()=>true}
                    onResponderRelease={()=>{ClickOpen('Boke');}}>
                    <Text style={openTab === 'Boke' ? styles.tabListTextClick : styles.tabListText}>博客</Text>
                </View>
                <View style={openTab === 'listen' ? styles.openTab : styles.defaultTab }
                    onStartShouldSetResponder={()=>true}
                    onResponderRelease={()=>{ClickOpen('listen');}}>
                    <Text style={openTab === 'listen' ? styles.tabListTextClick : styles.tabListText}>听书</Text>
                </View>
                <SearchIcon style={styles.searchIcon}
                    width={20}
                    height={20}/>
            </View>
            {
                userModal ?
                <LeftUserModal show={userModal} setUserModal={setUserModal}/> : ''
            }
        </View>
    );
};
export default DiscoverScreen;
