import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    allbtn: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 100,
    },
    linkIcon: {
        transform: [{rotate: '45deg'}],
    },
    leftNext: {
    },
    rightNext: {
        transform: [{rotate: '180deg'}],
    },
});
export default styles;
