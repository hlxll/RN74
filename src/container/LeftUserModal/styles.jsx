import { StyleSheet } from 'react-native';

const styles = (props)=>{
    const {width} = props;
    return StyleSheet.create({
        modelBack: {
          backgroundColor: '#64666580',
        },
        userModalBack: {
            backgroundColor:'rgba(255,255,255,0.7)',
            width:'100%',
            height:'100%',
        },
        LeftUserModal: {
            padding: 20,
            height:'100%',
            width: '80%',
            backgroundColor:'#fff',
            justifyContent:'flex-start',
            flexWrap:'wrap',
        },
        head: {
            flexDirection:'row',
            alignItems:'center',
        },
        userLog: {
            width: 26,
            height: 26,
            backgroundColor: '#fdf5f3',
            borderRadius: 13,
        },
        username: {
            color: '#000',
            fontWeight: '800',
            marginLeft: 5,
        },
        saoma: {
            marginLeft:'auto',
        },
        MemberCenter: {
            borderRadius: 10,
            overflow:'hidden',
            width:'100%',
            height:100,
            padding: 10,
            marginTop: 10,
        },
        memberName: {
            flexDirection:'row',
            // flex: 1,
            alignItems:'center',
        },
        memberLevel: {
            color:'#c8afab',
            fontWeight:'bold',
            fontSize:16,
        },
        progress: {
            backgroundColor:'#483a39',
            height: 4,
            width: 50,
            marginLeft: 3,
        },
        progressNum:{
            width:'20%',
            height: 4,
            backgroundColor:'#e1cdce',
        },
        memberNum: {
            color:'#7e7070',
        },
        twoElevenText: {
            color:'#c8afab',
        },
        twoEleven: {
            color:'#ddd',
            marginLeft:'auto',
            marginBottom: 5,
            marginTop:'auto',
            width: 20,
            height: 20,
        },
        memberCenterZero: {
            width: 70,
            height: 30,
            fontSize: 12,
            borderRadius: 20,
            justifyContent:'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#c8afab',
            marginLeft:'auto',
        },
        zeroText: {
            color: '#c8afab',
        },
        memberText: {
            color:'#c8afab',
            flex: 1,
            // marginBottom: 30
        },
        linkGroup:{
            marginBottom: 10,
            backgroundColor:'#fff',
            borderRadius: 20,
            overflow:'hidden',
            height: 'auto',
        },
        linkItem:{
            flexDirection:'row',
            height: 40,
            alignItems:'center',
            // flex: 1
        },
        linkItemName:{
            fontWeight: '600',
            fontSize: 16,
            color:'#2c323e',
        },
        linkRight: {
            marginLeft:'auto',
            flexDirection:'row',
            alignItems:'center',
            color:'#ddd',
        },
        linkRightText:{
            color:'#ddd',
        },
        linkRightNum:{
            width:'auto',
            textAlign:'center',
            backgroundColor:'red',
            borderRadius: 10,
            height: 20,
            paddingLeft: 4,
            paddingRight: 4,
        },
        linkRNumText:{
            color:'#fff',
        },
    });
}
export default styles;
