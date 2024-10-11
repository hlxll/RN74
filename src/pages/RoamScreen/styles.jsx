import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    roamScreen:{
        height: '100%',
        padding: 10,
    },
    head:{
        height: 40,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    backICon: {
        position: 'relative',
        left: 20,
        zIndex: 99,
    },
    centerHead: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        height: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centertext: {
        color: '#7cacc7',
    },
    rightUrl: {
        position: 'relative',
        right: 20,
    },
    roamBackImage: {
        width: '100%',
        height: '50%',
        resizeMode:'contain'
    },
    musicPlay: {
        marginTop: 'auto',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftDetail: {
        width: '66%',
    },
    textMove: {
        color: '#fff',
        width:'100%',
        height: 30,
        overflow:'hidden',
    },
    animatedStyle: {
        width: '200%',
        flexDirection: 'row',
    },
    textMoveText: {
        fontSize: 18,
        lineHeight: 30,
        color: '#fff',
    },
    moveCenterView: {
        width: 100,
    },
    nameFollowView: {
        flexDirection: 'row',
    },
    userFollow:{
        height: 30,
        color:'#ddd',
        fontSize: 14,
    },
    userFollText: {
        color: '#ddd',
        borderRadius: 10,
        width: 40,
        height: 20,
        backgroundColor: '#174c6b',
        alignItems: 'center',
    },
    userFollowContent: {
        color: '#ddd'
    },
    rightIcon: {
        width: '34%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rightTopText: {
        position: 'absolute',
        top: 0,
        right: 0,
        color: '#fff',
        fontSize: 10,
        backgroundColor: '#044364',
    },
    musicPlugin: {

    },
    footerIcon: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    column: {
        flex: 1,
        alignItems: 'center',
    },
});
export default styles;
