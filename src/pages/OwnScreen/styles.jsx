import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    OwnScreen: {
        height:'100%'
    },
    headLog: {
        alignItems:'center',
        height:'50%',
        backgroundColor: '#84432d',
        justifyContent:'flex-start',
        padding:10,
    },
    headBtn: {
        flexDirection:'row',
        width:'100%',
        height: 40,
        alignItems:'center'
    },
    headText: {
        color:'#ddd'
    },
    rightIcon: {
        flexDirection:'row',
        marginLeft: 'auto'
    },
    headerLog: {
        height:100,
        width:100,
        borderRadius: 50,
        overflow:'hidden',
        backgroundColor:'#fff'
    }
})
export default styles;