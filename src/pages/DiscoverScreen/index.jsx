import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import Liebiao from '../../static/image/recommend/liebiao.svg';
import SearchIcon from '../../static/image/recommend/ic_search24px.svg';
import LeftUserModal from '../../container/LeftUserModal';
import styleLess from './style.jsx';
const DiscoverScreen = ()=>{
  const [userModal, setUserModal] = useState(false);
  const [openTab, setOpenTab] = useState('');
  const [typeList, setTypeList] = useState([]);
  const {width} = Dimensions.get('window');
  const styles = styleLess(width)
  useEffect(()=>{
    setTypeList([
        {
            name: '精选',
        },
        {
            name: '排行榜',
        },
        {
            name: 'VIP',
        },
        {
            name: '歌单',
        },
        {
            name: '助眠',
        },
        {
            name: '慢摇DJ',
        },
        {
            name: '运动',
        },
    ]);
  },[]);
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
            <View style={styles.typeGroupMain}>
                <View style={styles.allTypeList}>
                    <ScrollView style={styles.itemGroup}
                        alwaysBounceHorizontal={true}
                        horizontal={true}>
                        {
                            typeList.map(item=>{
                                return(
                                    <View style={styles.typeItem}>
                                        <Text>
                                        {item.name}
                                        </Text>
                                    </View>
                                );
                            })
                        }
                    </ScrollView>
                </View>
                <View style={styles.GroupIcon} />
            </View>
            {
                userModal ?
                <LeftUserModal show={userModal} setUserModal={setUserModal}/> : ''
            }
        </View>
    );
};
export default DiscoverScreen;
