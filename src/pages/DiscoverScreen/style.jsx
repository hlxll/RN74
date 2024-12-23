import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    DiscoverScreenMain: {
        padding: 10,
    },
    tabList: {
        flexDirection:'row',
        width: '100%',
        justifyContent:'center',
        position:'relative',
    },
    LieheadIcon: {
        marginRight:'auto',
        position:'absolute',
        left: 0,
    },
    searchIcon: {
        position:'absolute',
        right: 0,
    },
    defaultTab: {
        marginLeft: 10,
        marginRight: 10
    },
    tabListText: {
        fontWeight: '800',
        color:'#ddd',
    },
    tabListTextClick: {
        fontWeight: '800',
        color:'#000',
    },
    openTab: {
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 3,
        borderBottomColor: 'red',
    },
});
export default styles;
