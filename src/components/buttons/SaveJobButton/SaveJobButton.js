import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';

import useSavedJobs from '../../../hooks/useSavedJobs';
import BMRadioList from '../../modals/BMRadioList';
import styles from './SaveJobButton.style';

const SaveJobButton = ({work}) => {
  const {opa, opaColor} = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const {savedJobs, addSavedJob, removeSavedJob, updateSavedJob} =
    useSavedJobs();
  const job = savedJobs[work.flag] || {...work, status: 0};
  const savedJobStatus = useSelector(state => state.savedJobStatus);
  const [selectedJobStatus, setSelectedJobStatus] = useState(job.status);

  const dispatch = useDispatch();

  useEffect(() => {
    if (job.status === selectedJobStatus) return;
    const last_status = job.status;
    job.status = selectedJobStatus;

    dispatch({type: 'selected/setWork', payload: job});

    if (!selectedJobStatus) {
      removeSavedJob(job);
      return;
    }

    !last_status ? addSavedJob(job) : updateSavedJob(job);
  }, [selectedJobStatus]);

  return (
    <TouchableOpacity
      style={selectedJobStatus ? styles.contOn(opaColor) : styles.contOff(opa)}
      onPress={() => setModalVisible(true)}>
      <Icon
        name={
          selectedJobStatus
            ? savedJobStatus[selectedJobStatus].icon
            : 'playlist-plus'
        }
        size={20}
        color={opa.set9}
      />
      <Text style={styles.text(opa.set9)}>
        {selectedJobStatus
          ? savedJobStatus[selectedJobStatus].optionName.toUpperCase()
          : 'KAYITLARIMA EKLE'}
      </Text>
      <BMRadioList
        visible={modalVisible}
        setVisible={setModalVisible}
        title={work.title}
        data={Object.values(savedJobStatus)}
        textPropName="optionName"
        selected={selectedJobStatus}
        setSelected={setSelectedJobStatus}
        extraItem={<Text style={styles.removeText(opaColor)}>KALDIR</Text>}
        onExtraItemClick={() =>
          setSelectedJobStatus(0) || setModalVisible(false)
        }
      />
    </TouchableOpacity>
  );
};

export default SaveJobButton;
