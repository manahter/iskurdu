import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import React from 'react';

import BMComment from '../../modals/BMComment';
import styles from './AddCommentButton.style';
import {useSelector} from 'react-redux';

export default function AddCommentButton({jobID}) {
  const [visible, setVisible] = React.useState(false);
  const savedJobs = useSelector(state => state.savedJobs);
  const {opa, opaColor} = useTheme();

  // Eğer kayıtlı ilanlarda yoksa boş dön.
  // Yani kaydedilmemiş ilana yorum eklenmeyecek
  if (!savedJobs[jobID]) return null;

  return (
    <>
      <TouchableOpacity
        onPress={() => setVisible(!visible)}
        style={styles.container(opaColor)}>
        <Icon size={40} color={opa.set8} name="plus" />
      </TouchableOpacity>
      <BMComment visible={visible} setVisible={setVisible} jobID={jobID} />
    </>
  );
}
