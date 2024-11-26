import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, Dimensions, FlatList, ImageBackground, Modal } from 'react-native';
import styles from './less.jsx';
import Liebiao from '../../static/image/recommend/liebiao.svg';
import Saoma from '../../static/image/recommend/saoma.svg';
import HuaTong from '../../static/image/recommend/huatong.svg';
import SearchIcon from '../../static/image/recommend/ic_search24px.svg';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useFrameProcessor,
} from 'react-native-vision-camera';
import { scanBarcodes } from 'vision-camera-code-scanner';
const winWidth = Dimensions.get('window').width;
const ScrollItem = ({data, footType})=>{
  return(
    <ImageBackground source={data.image}
      key={data.key}
      style={styles.scrollItem}>
      <View style={styles.scrollItem_head}>
        <HuaTong width={25} height={25} style={styles.scrollItem_head_icon}/>
        <Text style={styles.scrollItem_head_title}>{data.title}</Text>
      </View>
      <View style={[
        styles.scrollItem_footer,
        {
          backgroundColor:footType || '#000',
        },
      ]}>
        <Text style={[
          {
            color: footType ? '#000' : '#fff',
            paddingLeft: 5,
          },
        ]}>
        {data.text}
        </Text>
      </View>
    </ImageBackground>
  );
};
const App = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back', {
    physicalDevices: ['wide-angle-camera'],
 });
  const camera = useRef();
  const [showPhoto, setShowPhoto] = useState(false)

  useEffect(() => {
    if (!hasPermission) {
        requestPermission();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasPermission]);
  const [dayTime, setDayTime] = useState('11');
  const [scrollData, setScrollData] = useState([]);
  const [scrollNumData, setScrollNumData] = useState([]);
  useEffect(()=>{
    let list = [];
    let i = 0;
    let list2 = [];
    let j = 0;
    while(i < 10){
      list.push({
        key: i,
        title: '每日推荐',
        icon: require('../../static/image/recommend/huatong.svg'),
        image: require('../../static/image/recommend/peopleBack.jpg'),
        text: '符合你口味的新鲜好歌',
      });
      i++;
      list2.push({
        key: j,
        title: '14.4万',
        icon: require('../../static/image/recommend/huatong.svg'),
        image: require('../../static/image/recommend/peopleBack.jpg'),
        text: 'KTV热歌：八九零后麦霸点唱指南',
      });
      j++;
    }
    setScrollData(list);
    setScrollNumData(list2);
  },[]);
  // 拍照
  const takePicture = async () => {
    // const photo = await camera.current?.takePhoto({
    //   flash: 'auto',
    // });
    // console.log(photo);
    setShowPhoto(true)
  };
  const frameProcessor = useFrameProcessor((frame)=>{
    'worklet';
    const barcodes = scanBarcodes(frame);
    console.log(barcodes);
    
    if(barcodes.length){
      console.log(barcodes);
      // setBarcode(barcodes[0].displayValue)
    }
  });
  // const frameProcessor = useFrameProcessor((frame) => {
  //   'worklet'
  //   const objects = detectObjects(frame)
  //   const label = objects[0].name
  //   console.log(`You're looking at a ${label}.`)
  // }, [])
  
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
          <TextInput placeholder={'❤️失乐隔壁老樊'}
            style={styles.input}/>
          <Saoma style={styles.sao_headIcon}
          onPress={takePicture}
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
            />
        </View>
      </View>
      <View style={styles.scrollList}>
        <View style={styles.scrollHead}>
          <Text style={styles.scrollHeadTitle}>推荐歌单&nbsp;{'>'}</Text>
        </View>
        <View>
            <FlatList
            data={scrollNumData}
            horizontal={true}
            renderItem={({item}) => <ScrollItem data={item} footType={'#fff'}/>}
            />
        </View>
      </View>
      <Modal>
        {device != null && hasPermission && showPhoto ? (
          <Camera
          width={'100%'}
          height={'100%'}
          ref={camera}
          device={device}
          isActive={true}
          photo={true}
          frameProcessor={frameProcessor}
          />
          ) : ''
        }
      </Modal>
    </View>
  );
};

export default App;
