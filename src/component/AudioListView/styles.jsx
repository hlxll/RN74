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
});
export default styles;
