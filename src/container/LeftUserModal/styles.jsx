import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    LeftUserModal: {
        padding: 20,
        width:'90%',
        marginRight:'10%',
        backgroundColor:'#fff'
    },
    head: {
        flexDirection:'row',
        flex: 1,
        alignItems:'center'
    },
    saoma: {
        marginLeft:'auto'
    },

    MemberCenter: {
        borderRadius: 20,
        overflow:'hidden',
        height: 100
    },
    memberName: {
        flexDirection:'row',
        flex: 1,
        alignItems:'center'
    },
    progress: {
        backgroundColor:'#483a39'
    },
    memberNum: {
        marginLeft:'auto'
    },
    memberText: {
        color:'#ddd',
        marginBottom: 30
    },
    linkGroup:{
        marginBottom: 20,
        backgroundColor:'#fff',
        borderRadius: 20,
        overflow:'hidden'
    },
    linkItem:{
        flexDirection:'row',
        flex: 1
    },
    linkItemName:{
        fontWeight: '600',
        fontSize: 16,
    },
    linkRight: {
        marginLeft:'auto',
        flexDirection:'row',
        alignItems:'center',
        color:'#ddd'
    },
    linkRightText:{
        color:'#ddd'
    },
    linkRightNum:{
        width:'auto',
        textAlign:'center',
        backgroundColor:'red',
        borderRadius: 10,
        height: 20
    },
    linkRNumText:{
        color:'#fff'
    }
})
export default styles;