import React, { Image, Modal, ProgressBarAndroidComponent, Text, View } from 'react-native';
import PropleSvg from '../../static/image/renxiang.png';
import Saoma from '../../static/image/recommend/saoma.svg';
import TwoEventIcon from '../../static/image/recommend/WechatIMG119.png';

import styles from './styles.jsx';
import LinearGradient from 'react-native-linear-gradient';
const LeftUserModal = (props)=>{
    const {show} = props;
    const linkData = [
        [
            {
                icon:'',
                name:'双人空间',
                text:'超多人都在玩',
            },
        ],
        [
            {
                icon:'',
                name:'我的消息',
                num:'37',
            },
            {
                icon:'',
                name:'云贝中心',
                text:'兑换黑胶VIP',
            },
            {
                icon:'',
                name:'装扮中心',
            },
            {
                icon:'',
                name:'创作者中心',
            },
        ],
        [
            {
                icon:'',
                name:'趣测',
                text:'点击查看今日运势',
            },
            {
                icon:'',
                name:'云村有票',
            },
            {
                icon:'',
                name:'商城',
            },
            {
                icon:'',
                name:'Beat专区',
            },
            {
                icon:'',
                name:'云推歌',
            },
            {
                icon:'',
                name:'彩铃专区',
                text:'pick你的音乐彩铃',
            },
            {
                icon:'',
                name:'免流量听歌',
                text:'最多领24个月会员',
            },
        ],
    ];
    return(
        <Modal visible={show}
        transparent={true}>
            <View style={styles.modelBack}>
            <View style={styles.LeftUserModal}>
                <View style={styles.head}>
                    <Image source={PropleSvg} style={styles.userLog}/>
                    <Text>二十八200122{'>'}</Text>
                    <View style={styles.saoma}>
                        <Saoma width={20} height={20}/>
                    </View>
                </View>
                <LinearGradient
                    colors={['#3d3938','#5c4c4c','#5c4c4c','#5c4c4c','#3d3938']}
                    locations={[0,0.2, 0.5,0.8, 1]}
                    style={styles.MemberCenter}>
                    <View style={styles.memberName}>
                        <Text style={styles.memberLevel}>黑胶VIP.伍</Text>
                        <View style={styles.progress}>
                                <View style={styles.progressNum} />
                            </View>
                        <Text style={styles.memberNum}>v6</Text>
                        <View style={styles.memberCenterZero}>
                                <Text style={styles.zeroText}>会员中心</Text>
                            </View>
                    </View>
                    <Text style={styles.memberText}>
                        会员福利 | 锦鲤福利上新
                    </Text>
                    <View style={styles.head}>
                        <Text style={styles.twoElevenText}>双11大促! VIP低至4.9折!</Text>
                        {/* <Saoma style={styles.twoEleven} width={20} height={20}/> */}
                        <Image source={TwoEventIcon} style={styles.twoEleven}/>
                    </View>
                </LinearGradient>
                {
                    linkData.map((item, index)=>{
                        return(
                            <View key={index} style={styles.linkGroup}>
                                {
                                    item.map((link, j)=>(
                                        <View key={j} style={styles.linkItem}>
                                            <Text>
                                                {link.icon}
                                            </Text>
                                            <Text style={styles.linkItemName}>
                                                {link.name}
                                            </Text>
                                            <View style={styles.linkRight}>
                                                {
                                                    link.text ? <Text style={styles.linkRightText}>{link.text}</Text> : ''
                                                }
                                                {
                                                    link.num ? <View style={styles.linkRightNum}>
                                                        <Text style={styles.linkRNumText}>{link.num}</Text>
                                                    </View> : ''
                                                }
                                                <Text>{' >'}</Text>
                                            </View>
                                        </View>
                                    ))
                                }
                            </View>
                        );
                    })
                }
            </View>
            </View>
        </Modal>
    );
};
export default LeftUserModal;
