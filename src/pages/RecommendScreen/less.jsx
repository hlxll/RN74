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
        width: 150,
        height: 200,
        marginRight: 10,
        backgroundColor: '#ddd',
    },
    scrollItem_head: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    scrollItem_head_title: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16
    },
    scrollItem_footer: {
        height: 40,
        marginTop: 130,
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    scrollList: {

    },
    scrollHead: {
        height: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    scrollLeftTitle: {
        fontSize: 30,
        justifyContent: 'center',
        fontWeight: 'bold',
        color: '#000',
    },
    scrollHeadTitle: {
        width: '100%',
        fontWeight: '500',
        color: '#000',
        fontSize: 18,
    },
    scrollHead_right: {
        width: 'auto',
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 'auto',
        height: 40,
        backgroundColor: '#ddd',
        borderRadius: 20,
        justifyContent: 'center'
    },
    photoView: {
        width: '100%',
        height: '100%',
        position:'absolute',
        paddingLeft: 20,
        paddingRight: 20,
        left:0,
        top:0,
        backgroundColor:'transparent',
    },
    photoHead: {
        height: 40,
        flexDirection: 'row',
        alignItems:'center',
    },
    photoHeadLeft: {
        flexDirection:'row',
        alignItems:'center',
    },
    photoHeadLText: {
        color: '#fff',
        fontWeight: '800',
        marginLeft: 10,
        fontSize: 16
    },
    photoHeadRight: {},
    photoHeadRText:{
        color:'#fff',
    },
    qrPhoto: {
        width: 100,
        height: 40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 20,
        backgroundColor:'rgba(255,255,255,0.3)',
        overflow:'hidden',
        margin:'auto',
        marginBottom: 20
    },
    qrText:{
        color: '#ffffff'
    }
});
export default styles;
