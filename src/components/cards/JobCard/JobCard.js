import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Config from 'react-native-config';
import React from 'react';

import {remainingTimeLimit} from '../../../utils/date';
import SaveJobIcon from '../../buttons/SaveJobIcon/SaveJobIcon';
import TextIcon from './components/TextIcon/TextIcon';
import styles from './JobCard.style';

const JobCard = ({item, onPress = () => null, onLongPress = () => null}) => {
  const {opa} = useTheme();

  const deadline = remainingTimeLimit(item.deadline);

  return (
    <View style={styles.container(opa, deadline === Config.END_TIME)}>
      <TouchableWithoutFeedback onPress={onPress} onLongPress={onLongPress}>
        <View>
          <View style={styles.header}>
            <Text style={styles.title(opa)}>{item.title}</Text>
            <TextIcon
              text={item.numOfHires}
              icon={item.hasDisorder ? 'human-wheelchair' : 'account'}
              flexDirection="row"
            />
          </View>
          <View style={styles.detailContainer}>
            <TextIcon text={item.il} icon="map-marker" />
            <TextIcon text={item.ilce} icon="office-building-marker" />
            <TextIcon text={deadline} icon="calendar-range" />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.footer}>
        <SaveJobIcon work={item} />
      </View>
    </View>
  );
};

export default JobCard;
