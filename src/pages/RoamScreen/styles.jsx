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
    }
});
export default styles;
