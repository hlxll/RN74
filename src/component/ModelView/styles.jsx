import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    modelSelectAnimated: {
        width: '100%',
        height: '100%',
        backgroundColor: '#76290f',
        padding: 10
    },
    modelModal: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    closeIcon: {
        position: 'relative',
        left: 30,
        zIndex: 99,
        color: '#fff',
        fontSize: 24,
    },
    model_head_cneter: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerText: {
        color: '#fff',
    },
    centerIcon: {
        transform: [{rotate: '180deg'}],
    },
    rightSet: {
        width: 50,
        height: 30,
        borderRadius: 15,
        position: 'relative',
        right: 30,
        color: '#fff',
        backgroundColor: '#9d3f25',
        zIndex: 999,
        alignItems: 'center',
        justifyContent: 'center',
    },
    setText: {
        color: '#fff',
    },
    flatItem: {
        borderRadius: 10,
        width: '100%',
        height: 80,
        backgroundColor: '#943d21',
        justifyContent: 'center',
        marginTop: 20,
    },
    flatItemSelect: {
        borderRadius: 10,
        width: '100%',
        height: 80,
        backgroundColor: '#a4634f',
        justifyContent: 'center',
        marginTop: 20,
    },
    flattitle: {
        width: '100%',
        alignItems: 'center',
        height: 20,
        justifyContent: 'center',
    },
    flatItemTitle: {
        color: '#fff',
        height: 20,
        lineHeight: 20,
    },
    flatItemText: {
        color: '#ddd',
        height: 20,
        lineHeight: 20,
    },
    trainModel:{
        color: '#ddd',
        height: 30,
        lineHeight: 30,
        marginTop: 20,
        marginBottom: 10,
    },
    modelList: {
        flexDirection: 'row',
        backgroundColor: '#943d21',
        borderRadius: 10,
    },
    modelListItemSelect: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        width: '25%',
        alignItems: 'center',
    },
    modelListItem: {
        width: '25%',
        alignItems: 'center',
    },
});
