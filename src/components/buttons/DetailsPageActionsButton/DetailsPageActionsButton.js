import {TouchableOpacity, Share, Linking, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Clipboard from '@react-native-clipboard/clipboard';
import {useTheme} from '@react-navigation/native';
import Config from 'react-native-config';
import React, {useState} from 'react';

import toastMessage from '../../../utils/toastMessage';
import {addBug} from '../../../services/addFireStore';
import styles from './DetailsPageActionsButton.style';
import BMActionList from '../../modals/BMActionList';

const data = link => [
  {
    icon: 'bug',
    text: 'Hata Bildir',
    onPress: () => addBug('', link),
  },
  {
    icon: 'share-variant',
    text: 'Şurada Paylaş',
    onPress: () => {
      Share.share({message: link}).catch(() => {
        Alert.alert('HATA', 'Paylaşmada bir sorun var gibi gözüküyor');
      });
    },
  },
  {
    icon: 'web',
    text: 'Tarayıcıda aç',
    onPress: async () => {
      (await Linking.canOpenURL(link))
        ? await Linking.openURL(link)
        : Alert.alert('Bu adres şuanda açılamıyor', link);
    },
  },
  {
    icon: 'link-variant',
    text: 'Linki Kopyala',
    onPress: () => {
      Clipboard.setString(link);
      toastMessage('Link kopyalandı');
    },
  },
];

export default function DetailsPageActionsButton({work}) {
  const {opa} = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const link = `${Config.URL_ILANDETAY}?uiID=${work.flag}`;

  return (
    <TouchableOpacity
      style={styles.container(opa)}
      onPress={() => setModalVisible(true)}>
      <Icon name={'dots-horizontal'} size={20} color={opa.set9} />
      <BMActionList
        title={`(${work.flag}) ${work.title}`}
        visible={modalVisible}
        setVisible={setModalVisible}
        data={data(link)}
      />
    </TouchableOpacity>
  );
}
