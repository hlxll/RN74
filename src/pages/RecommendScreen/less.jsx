import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    recomm_head:{
        width: '100%',
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
    },
    LieheadIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    headIcon: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    search: {
        position: 'relative',
        height: 40,
        backgroundColor: '#ddd',
        borderRadius: 20,
    },
    input: {
        marginLeft: 30
    },
    searchIcon: {
        position: 'absolute',
        left: 10,
        top: 10,
    },
    sao_headIcon: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    scrollItem: {
        width: 200,
        height: 200,
        marginRight: 10,
        backgroundColor: '#ddd'
    },
    scrollItem_head: {
        height: 30,
        flexDirection: 'row',
    },
    scrollItem_footer: {
        height: 40,
        backgroundColor: '#000',
        marginTop: 130,
    }
});
export default styles;
