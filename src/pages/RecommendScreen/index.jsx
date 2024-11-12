import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, Dimensions, FlatList, ImageBackground } from 'react-native';
import styles from './less.jsx';
import Liebiao from '../../static/image/recommend/liebiao.svg';
import Saoma from '../../static/image/recommend/saoma.svg';
import HuaTong from '../../static/image/recommend/huatong.svg';
import SearchIcon from '../../static/image/recommend/ic_search24px.svg';
import { RNCamera } from 'react-native-camera';
const winWidth = Dimensions.get('window').width;
const ScrollItem = ({data, footType})=>{
  return(
    <ImageBackground source={data.image}
      style={styles.scrollItem}>
      <View style={styles.scrollItem_head}>
        <HuaTong width={25} height={25} style={styles.scrollItem_head_icon}/>
        <Text style={styles.scrollItem_head_title}>{data.title}</Text>
      </View>
      <View style={[
        styles.scrollItem_footer,
        {
          backgroundColor:footType || '#000',
        }
      ]}>
        <Text style={[
          {
            color: footType?'#000':'#fff',
            paddingLeft: 5,
          }
        ]}>
        {data.text}
        </Text>
      </View>
    </ImageBackground>
  );
};
const App = () => {
  const [dayTime, setDayTime] = useState('11');
  const [scrollData, setScrollData] = useState([]);
  const [scrollNumData, setScrollNumData] = useState([]);
  const cameraRef = useRef(null);
  const taskPicture = async ()=>{
    if(cameraRef.current){
      console.log(cameraRef.current.takePictureAsync);
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      console.log("shuju=", data);
    }
  };
  useEffect(()=>{
    let list = [];
    let i = 0;
    let list2 = [];
    let j = 0;
    while(i < 10){
      list.push({
        title: '每日推荐',
        icon: require('../../static/image/recommend/huatong.svg'),
        image: require('../../static/image/recommend/peopleBack.jpg'),
        text: '符合你口味的新鲜好歌',
      });
      i++;
      list2.push({
        title: '14.4万',
        icon: require('../../static/image/recommend/huatong.svg'),
        image: require('../../static/image/recommend/peopleBack.jpg'),
        text: 'KTV热歌：八九零后麦霸点唱指南',
      });
      j++;
    }
    setScrollData(list);
    setScrollNumData(list2)
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
          <TextInput placeholder={`❤️失乐隔壁老樊`}
            style={styles.input}/>
          <RNCamera ref={cameraRef}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}/>
          <Saoma style={styles.sao_headIcon}
          onPress={taskPicture}
          width={20}
          height={20}/>
        </View>
        <HuaTong style={styles.headIcon}
        width={20}
        height={20}/>
      </View>
      <View style={styles.scrollList}>
        <View style={styles.scrollHead}>
          <Text style={styles.scrollLeftTitle}>早上好</Text>
          <View style={styles.scrollHead_right}>
            <Text>VIP 送会员返现金{'>'}</Text>
          </View>
        </View>
        <View>
            <FlatList
            data={scrollData}
            horizontal={true}
            renderItem={({item}) => <ScrollItem data={item}/>}
            keyExtractor={item => item.id}/>
        </View>
      </View>
      <View style={styles.scrollList}>
        <View style={styles.scrollHead}>
          <Text style={styles.scrollHeadTitle}>推荐歌单&nbsp;{`>`}</Text>
        </View>
        <View>
            <FlatList
            data={scrollNumData}
            horizontal={true}
            renderItem={({item}) => <ScrollItem data={item} footType={'#fff'}/>}
            keyExtractor={item => item.id}/>
        </View>
      </View>
    </View>
  );
};

export default App;
