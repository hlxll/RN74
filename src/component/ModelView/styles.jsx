import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    flatItem: {
        borderRadius: 10,
        width: '100%',
        height: 80,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    flatItemSelect: {
        borderRadius: 10,
        width: '100%',
        height: 80,
        backgroundColor: 'rgba(255,255,255,0.6)',
    },
    flattitle: {
        width: '100%',
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',
    },
    flatItemTitle: {
        color: '#fff',
        fontWeight: 800,
    },
    flatItemText: {
        fontWeight: 500,
        color: '#ddd',
    },

    modelList: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.6)',
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
