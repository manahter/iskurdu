import {useTheme} from '@react-navigation/native';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';

import styles from './BottomModal.style';

export default function SelectModal({title, visible, setVisible, children}) {
  const {opa, gri} = useTheme();

  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.6}
      animationIn="slideInUp"
      swipeDirection="down"
      onSwipeComplete={() => setVisible(false)}
      onBackdropPress={() => setVisible(false)}
      style={styles.modal}>
      <View style={styles.header(gri, title)}>
        <View style={styles.touchLine(opa)} />
        {title ? <Text style={styles.title(opa)}>{title}</Text> : null}
      </View>
      <View style={styles.container(gri)}>{children}</View>
    </Modal>
  );
}
