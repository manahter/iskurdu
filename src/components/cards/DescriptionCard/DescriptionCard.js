import {useTheme} from '@react-navigation/native';
import {Text, View} from 'react-native';
import React from 'react';

import {distanceTimeLimit} from '../../../utils/date';
import styles from './DescriptionCard.style';

const DescriptionCard = ({title, text, children, time}) => {
  const {opa} = useTheme();

  return (
    <View style={styles.container(opa)}>
      {title ? <Text style={styles.title(opa)}>{title}</Text> : null}
      {time ? (
        <Text style={styles.time(opa)}>{distanceTimeLimit(time, 3)}</Text>
      ) : null}
      {text ? <Text style={styles.text(opa)}>{text}</Text> : null}
      {children}
    </View>
  );
};

export default DescriptionCard;
