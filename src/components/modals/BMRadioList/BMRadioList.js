import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, FlatList, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import React from 'react';

import styles from './BMRadioList.style';
import BottomModal from '../BottomModal';

// title : string
// visible : booleanState
// setVisible : functionState
// data : Array -> [ {id: 123, text: 'This is'}, ...]
// textPropName: string -> default: 'text'
// selected : Selected ID in dataArray
// setSelected : functionState
// extraItem : Component -> touchable Component in row right
// onExtraItemClick: function -> on extraItem click event
export default function BMRadioList({
  title,
  visible,
  setVisible,
  data,
  textPropName = 'text',
  selected,
  setSelected,
  extraItem,
  onExtraItemClick = () => null,
}) {
  const {opa, opaColor} = useTheme();

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => setSelected(item.id) || setVisible(false)}>
      <Icon
        name={selected === item.id ? 'radiobox-marked' : 'radiobox-blank'}
        size={22}
        color={selected === item.id ? opaColor.set9 : opa.set7}
      />
      <Text style={styles.text(opa)}>{item[textPropName]}</Text>

      {selected === item.id && extraItem ? (
        <TouchableOpacity onPress={onExtraItemClick}>
          {extraItem}
        </TouchableOpacity>
      ) : null}
    </TouchableOpacity>
  );

  return (
    <BottomModal title={title} visible={visible} setVisible={setVisible}>
      <FlatList data={data} renderItem={renderItem} style={styles.flatlist} />
    </BottomModal>
  );
}
