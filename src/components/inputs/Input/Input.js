import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Input.style';

const Input = ({placeholder, onChange, value, isSecure, icon = 'account'}) => {
  const [hide, setHide] = useState(isSecure);
  const {opa} = useTheme();

  return (
    <View style={styles.container(opa)}>
      <Icon name={icon} size={20} color={opa.set7} style={styles.icon} />
      <TextInput
        autoCapitalize="none"
        style={styles.input(opa)}
        placeholder={placeholder}
        onChangeText={onChange}
        placeholderTextColor={opa.set6}
        value={value}
        secureTextEntry={hide}
      />
      {isSecure && (
        <TouchableOpacity onPress={() => setHide(!hide)}>
          <Icon
            name={hide ? 'eye-off-outline' : 'eye'}
            size={20}
            color="#999"
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
