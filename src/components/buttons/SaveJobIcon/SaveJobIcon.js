import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';

import useSavedJobs from '../../../hooks/useSavedJobs';

const SaveJobIcon = ({work, size = 24, style = {}}) => {
  const {savedJobs, addSavedJob, removeSavedJob} = useSavedJobs();

  const [saved, setSaved] = useState();
  const {opa} = useTheme();

  useEffect(() => {
    setSaved(savedJobs[work.flag] ? true : false);
  }, [savedJobs]);

  const onPress = () => {
    saved ? removeSavedJob(work) : addSavedJob({...work, status: 1});
    setSaved(!saved);
  };

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Icon
        size={size}
        color={saved ? opa.set9 : opa.set8}
        name={saved ? 'bookmark' : 'bookmark-outline'}
      />
    </TouchableOpacity>
  );
};

export default SaveJobIcon;
