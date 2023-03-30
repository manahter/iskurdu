import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import React from 'react';

import styles from './SelectBarItem.style';

export default function SelectBarItem({
  id,
  icon,
  text,
  count,
  selected,
  setSelected,
}) {
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
      {icon && (
        <Icon
          size={16}
          name={icon}
          style={styles.icon}
          color={active ? opaColor.set8 : opa.set7}
        />
      )}

      <Text style={styles[active ? 'active' : 'passive'].text(opa, opaColor)}>
        {text}
      </Text>
      {count !== null ? (
        <Text style={styles.count(active ? opaColor : opa)}>{count}</Text>
      ) : null}
    </TouchableOpacity>
  );
}
