import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    titleText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: 'bold',
      },
      box: {
        height: 150,
        width: 150,
        backgroundColor: 'blue',
        borderRadius: 5,
      },
    audioAnimated: {
        marginLeft: -10,
    },
    AudioListView: {
        width: '100%',
        height: '100%',
    },
    audioHead: {
        borderRadius: 20,
        height: 200,
        width: '100%',
    },
    audioListHead: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 160,
    },
    leftText: {
        width: '60%',
    },
    leftTextOne: {
        color: '#fff',
        fontSize: 16,
    },
    leftTextTwo: {
        color: 'rgba(255,255,255,0.8)',
    },
    startAudio: {
        width: 70,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    startAudioText: {
        color: '#fff',
    },
    autoListContent: {
        marginTop: -40,
        backgroundColor: '#fff',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    moveView: {
        height: 25,
        alignItems:'center',
        justifyContent: 'center',
    },
    moveIcon: {
        height: 4,
        width: 30,
        backgroundColor: '#ddd',
        borderRadius: 2,
    },
    audioContent: {
        padding: 10,
    },
    tabList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginTop: 10,
    },
    clickedTab: {
        width: 100,
        height: 40,
        lineHeight: 40,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    defaultTab:{
        width: 100,
        height: 40,
        lineHeight: 40,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'transparent',
    },
    clickedText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
    },
    defaultText: {
        color: '#ddd',
        fontWeight: 'bold',
        fontSize: 20,
    },
    rightTopNum: {
        position: 'absolute',
        right: 5,
        top: -5,
    },
    flatListAll: {
        width: '100%',
        marginTop: 10
    },
    flatItem: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
    },
    flatVip: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'red',
        width: 30,
        height: 20,
        marginRight: 5,
    },
    vipText: {
        textAlign: 'center',
        fontSize: 12,
        color: 'red',
    },
    closeFlat: {
        marginLeft: 'auto',
        marginRight: 10,
        fontSize: 16,
        color: '#ddd'
    }
});
export default styles;
