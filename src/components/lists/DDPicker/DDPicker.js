import DropDownPicker from 'react-native-dropdown-picker';
import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';

import styles from './DDPicker.style';

const DDPicker = ({
  value,
  setValue,
  items,
  onChangeValue,
  placeHolder,
  onSelectItem,
}) => {
  const [open, setOpen] = useState(false);
  const {dark, opa, opaColor} = useTheme();
  const color = items.length && items[0].value === value ? opa : opaColor;

  return (
    <DropDownPicker
      placeholder={placeHolder}
      open={open}
      value={value}
      items={items}
      listMode="MODAL"
      setOpen={setOpen}
      searchable={true}
      setValue={setValue}
      // setItems={setItems}
      onSelectItem={onSelectItem}
      style={styles.picker(color)}
      textStyle={styles.text(opa)}
      onChangeValue={onChangeValue}
      theme={dark ? 'DARK' : 'LIGHT'}
      containerProps={{style: styles.containerProps}}
      translation={{
        language: 'TR',
        PLACEHOLDER: placeHolder,
        SEARCH_PLACEHOLDER: ' Ara...',
      }}
    />
  );
};

export default DDPicker;
