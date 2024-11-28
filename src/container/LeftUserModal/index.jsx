import React, { Modal, ProgressBarAndroidComponent, Text, View } from 'react-native';
import PropleSvg from '../../static/image/renxiang.svg';
import Saoma from '../../static/image/recommend/saoma.svg';
import styles from './styles.jsx';
import LinearGradient from 'react-native-linear-gradient';
const LeftUserModal = (props)=>{
    const {show} = props;
    return(
        <Modal visible={show}>
            <View style={styles.LeftUserModal}>
                <View style={styles.head}>
                    <PropleSvg width={20} height={20}/>
                    <Text>二十八200122{'>'}</Text>
                    <View style={styles.saoma}>
                        <Saoma/>
                    </View>
                </View>
                <LinearGradient
                    colors={['#3d3938','#5c4c4c','#3d3938']}
                    locations={[0, 0.5, 1]}
                    style={styles.MemberCenter}>
                    <View style={styles.memberName}>
                        <Text style={styles.memberLevel}>黑胶VIP.伍</Text>
                        <ProgressBarAndroidComponent
                            progress={10}
                            color={'#fff'}
                            style={styles.progress}/>
                        <Text style={styles.memberNum}>v6</Text>
                    </View>
                </LinearGradient>
            </View>
        </Modal>
    );
};
export default LeftUserModal;
