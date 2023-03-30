import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, FlatList, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import React from 'react';

import styles from './BMActionList.style';
import BottomModal from '../BottomModal';

// title : string
// visible : booleanState
// setVisible : functionState
// data: [{icon, text, onPress}, {..} ...]

export default function BMActionList({title, visible, setVisible, data}) {
  const {opa} = useTheme();

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => item.onPress() || setVisible(false)}>
      <Icon name={item.icon} size={22} color={opa.set9} />
      <Text style={styles.text(opa)}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <BottomModal title={title} visible={visible} setVisible={setVisible}>
      <FlatList data={data} renderItem={renderItem} style={styles.flatlist} />
    </BottomModal>
  );
}
