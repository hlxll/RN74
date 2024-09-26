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
        zIndex: 99
    },
    centerHead: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        height: 40,
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
        alignItems: 'center'
    },
    leftDetail: {
        width: '66%',
    },
    textMove: {
        color: '#fff',
        width:'100%',
        overflow:'hidden',
    },
    textMoveText: {
        fontSize: 16
    },
    userFollow:{
        color:'#ddd',
        fontSize: 14,
    },
    rightIcon: {
        width: '34%'
    }
});
export default styles;
