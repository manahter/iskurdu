import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, Linking, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import React from 'react';

import styles from './ContactCard.style';

const ContactCard = ({text}) => {
  const {opa} = useTheme();

  const icon = text.indexOf('@') > -1 ? 'email' : 'phone-in-talk';
  const link = text.indexOf('@') > -1 ? 'mailto' : 'tel';

  return (
    <TouchableOpacity
      style={styles.container(opa)}
      onPress={() => Linking.openURL(`${link}:${text}`)}>
      <Icon name={icon} color={opa.set9} size={24} />
      <Text style={styles.title(opa)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ContactCard;
