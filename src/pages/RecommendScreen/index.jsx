import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Dimensions, FlatList, ImageBackground } from 'react-native';
import styles from './less.jsx';
import Liebiao from '../../static/image/recommend/liebiao.svg';
import Saoma from '../../static/image/recommend/saoma.svg';
import HuaTong from '../../static/image/recommend/huatong.svg';
import SearchIcon from '../../static/image/recommend/ic_search24px.svg';
const winWidth = Dimensions.get('window').width;
const ScrollItem = ({data})=>{
  return(
    <ImageBackground 
      style={styles.scrollItem}>
      <View style={styles.scrollItem_head}>
        <Text>
        {data.icon}
        </Text>
        <Text>{data.title}</Text>
      </View>
      <View style={styles.scrollItem_footer}>
        <Text>
        {data.text}
        </Text>
      </View>
    </ImageBackground>
  );
};
const App = () => {
  const [dayTime, setDayTime] = useState('11');
  const [scrollData, setScrollData] = useState([]);
  useEffect(()=>{
    let list = [];
    let i = 0;
    while(i < 10){
      list.push({
        title: '每日推荐',
        icon: <HuaTong width={10} height={10}/>,
        image: '',
        text: '符合你口味的新鲜好歌',
      });
      i++;
    }
    setScrollData(list);
  },[]);

  return (
    <View style={styles.container}>
      <View style={styles.recomm_head}>
        <Liebiao style={styles.LieheadIcon}
        width={20}
        height={20}/>
        <View style={[styles.search,{
          width: winWidth - 80,
        }]}>
          <SearchIcon
          style={styles.searchIcon}
          width={20}
          height={20}/>
          <TextInput placeholder="失乐隔壁老樊"
            style={styles.input}/>
          <Saoma style={styles.sao_headIcon}
          width={20}
          height={20}/>
        </View>
        <HuaTong style={styles.headIcon}
        width={20}
        height={20}/>
      </View>
      <View style={styles.scrollList}>
        <View style={styles.scrollHead}>
          <Text>早上好</Text>
        </View>
        <View>
            <FlatList
            data={scrollData}
            horizontal={true}
            renderItem={({item}) => <ScrollItem data={item}/>}
            keyExtractor={item => item.id}/>
        </View>
      </View>
    </View>
  );
};

export default App;
