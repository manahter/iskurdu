import React from 'react';
import {useTheme} from '@react-navigation/native';
import {TouchableOpacity, Text} from 'react-native';

import styles from './SelectBarItem.style';

export default function SelectBarItem({id, selected, setSelected, groupName}) {
  const [active, setActive] = React.useState(id === selected);
  const {opa, opaColor} = useTheme();

  React.useEffect(() => {
    setActive(selected === id);
  }, [selected]);

  const handleOnPress = () => {
    setSelected(id);
  };

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={styles[active ? 'active' : 'passive'].container(opa, opaColor)}>
      <Text style={styles[active ? 'active' : 'passive'].text(opa, opaColor)}>
        {groupName}
      </Text>
    </TouchableOpacity>
  );
}
