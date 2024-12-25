import { StyleSheet } from 'react-native';

const styleLess = (data)=>{
    console.log(data);
    
    return StyleSheet.create({
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
            color: '#000'
        },
        defaultTab: {
            marginLeft: 10,
            marginRight: 10
        },
        tabListText: {
            fontWeight: '800',
            color:'#b0b0b8',
            fontSize: 16
        },
        tabListTextClick: {
            fontWeight: '800',
            color:'#000',
            fontSize: 16
        },
        openTab: {
            marginLeft: 10,
            marginRight: 10,
            borderBottomWidth: 3,
            borderBottomColor: 'red',
        },
        typeGroupMain: {
            width: '100%',
            flexDirection:'row'
        },
        allTypeList: {
            width: data - 100,
            flexDirection:'row',
            height: 40,
            backgroundColor:'red'
        },
        itemGroup: {
            flexDirection:'row',
            overflow:'scroll'
        },
        typeItem: {
            width:'20%'
        },
        GroupIcon: {
            width: 100,
        }
    });
}
export default styleLess;
