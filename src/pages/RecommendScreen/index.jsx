import React, { useRef, useState } from "react";
import { View, StyleSheet, Modal, Text } from "react-native";

const App = () => {
  const [dayTime, setDayTime] = useState('');
  return (
    <View style={styles.container}>
      <Modal>
        <Text>{dayTime}</Text>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default App;