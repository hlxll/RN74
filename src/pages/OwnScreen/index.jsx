import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import HeaderLog from '../../static/image/renxiang.png'
import LieBiao from '../../static/image/liebiao.svg'
import SearchIcon from '../../static/image/recommend/ic_search24px.svg';
import MoreList from '../../static/image/gengduo.svg';

import styles from './styles';
const OwnScreen = ()=>{
    const details = [
        {
            num: '3',
            text:'关注'
        },
        {
            num: '1',
            text:'粉丝'
        },
        {
            num: 'Lv.8',
            text:'等级'
        },
        {
            num: '856时',
            text:'听歌'
        }
    ]
    return(
        <View style={styles.OwnScreen}>
            <View style={styles.headLog}>
                <View style={styles.headBtn}>
                    <LieBiao width={20}/>
                    <Text style={styles.headText}>
                        加油
                    </Text>
                    <View style={styles.rightIcon}>
                        <SearchIcon width={25}/>
                        <MoreList width={25}/>
                    </View>
                </View>
                <ImageBackground source={HeaderLog}
                    style={styles.headerLog}
                width={50}
                height={50}/>
                <View>
                    <Text style={styles.nameText}>
                        二十八200122
                    </Text>
                </View>
                <View>
                    <View style={styles.textAddRight}>
                        <Text style={styles.huizhangRight}>
                            14枚徽章
                        </Text>
                        <View style={styles.afterLine}></View>
                    </View>
                    <Text style={styles.huizhangRight}>
                        江西 上饶 · 村龄4年
                    </Text>
                </View>
                <View style={styles.listDetails}>
                    {
                        details.map(item=>{
                            return(
                                <Text style={styles.detailItem}>
                                    <Text style={styles.detailItemNum}>
                                        {item.num}&nbsp;
                                    </Text>
                                    {item.text}
                                </Text>
                            )
                        })    
                    }
                </View>
            </View>
        </View>
    );
};
export default OwnScreen;
