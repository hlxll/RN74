/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, Dimensions, FlatList, ImageBackground,
  Modal, Animated, Alert } from 'react-native';
import styles from './less.jsx';
import Liebiao from '../../static/image/recommend/liebiao.svg';
import Saoma from '../../static/image/recommend/saoma.svg';
import HuaTong from '../../static/image/recommend/huatong.svg';
import SearchIcon from '../../static/image/recommend/ic_search24px.svg';
import BackRecommend from '../../static/image/recommend/fanhui.svg';
import LeftUserModal from '../../container/LeftUserModal';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
  useFrameProcessor,
} from 'react-native-vision-camera';
import LinearGradient from 'react-native-linear-gradient';
// import { scanBarcodes } from 'vision-camera-code-scanner';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

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
  const [showPhoto, setShowPhoto] = useState(false);
  const photoAnimat = useRef(new Animated.Value(50)).current;
  const photoNum = useRef(50);
  const moveHieght = winHeight * 0.6;
  const [userModal, setUserModal] = useState(false);
  useEffect(() => {
    if (!hasPermission) {
        requestPermission();
    }

  }, [hasPermission]);
  const [dayTime, setDayTime] = useState('11');
  const [scrollData, setScrollData] = useState([]);
  const [scrollNumData, setScrollNumData] = useState([]);
  let moveIds = '';
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
    return()=>{
      if(moveIds){
        clearInterval(moveIds);
      }
    };
  },[]);
  // 拍照
  const takePicture = async () => {
    setShowPhoto(true);
    moveIds = setInterval(()=>{
      moveRedLine();
    },3500);
  };
  //上下移动的红线
  const moveRedLine = () => {
    if(photoNum.current === moveHieght){
      Animated.timing(photoAnimat, {
        toValue: 50,
        duration: 3000,
        useNativeDriver: true,
      }).start((result)=>{
        photoNum.current = result.value;
      });
    }else{
      Animated.timing(photoAnimat, {
        toValue: moveHieght,
        duration: 3000,
        useNativeDriver: true,
      }).start((result)=>{
        photoNum.current = result.value;
      });
    }
  };
  const frameProcessor = useFrameProcessor((frame)=>{
    'worklet';
    // const barcodes = scanBarcodes(frame);
    // console.log(barcodes);

    // if(barcodes.length){
      // console.log(barcodes);
      // setBarcode(barcodes[0].displayValue)
    // }
  });
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes) => {
      //返回二维码的数据
      codes.forEach(item=>{
        Alert.alert({
          title:'二维码数据',
          message: item.value,
        });
      });
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.recomm_head}>
        <Liebiao style={styles.LieheadIcon}
        width={20}
        height={20}
        onPress={()=>{setUserModal(true);}}/>
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
      <Modal visible={showPhoto}>
        {device != null && hasPermission && showPhoto ? (
          <>
            <Camera
              width={'100%'}
              height={'100%'}
              ref={camera}
              device={device}
              isActive={true}
              photo={true}
              // frameProcessor={frameProcessor}
              codeScanner={codeScanner}
              />
              <View style={styles.photoView}>
                <View style={styles.photoHead}>
                  <View style={styles.photoHeadLeft}>
                    <BackRecommend width={20} height={20}
                      onPress={()=>{setShowPhoto(false); clearInterval(moveIds);}}/>
                    <Text style={styles.photoHeadLText}>扫一扫</Text>
                  </View>
                  <View style={[
                    styles.photoHeadRight,
                    {
                      marginLeft: winWidth - 160,
                    },
                  ]}>
                    <Text style={styles.photoHeadRText}>相册{photoAnimat.current}</Text>
                  </View>
                </View>
                <Animated.View
                  style={[
                    {
                      width: '100%',
                      translateY: photoAnimat,
                    },
                  ]}>
                  <LinearGradient
                    colors={['#ffffff','#ff0000', '#ff0000','#ff0000','#ffffff']}
                    locations={[0, 0.1, 0.5, 0.9, 1]}
                    // start={{x: 0, y: 0}}
                    // end={{x: winWidth, y: 0}}
                    style={[
                      // eslint-disable-next-line react-native/no-inline-styles
                      {
                        width:'100%',
                        height: 2,
                      },
                    ]}/>
                </Animated.View>
                <View style={styles.qrPhoto}>
                  <Text style={styles.qrText}>我的二维码</Text>
                </View>
              </View>
          </>
          ) : <Text>没权限</Text>
        }
      </Modal>
      {
        userModal ?
      <LeftUserModal show={userModal}/> : ''
      }
    </View>
  );
};

export default App;
