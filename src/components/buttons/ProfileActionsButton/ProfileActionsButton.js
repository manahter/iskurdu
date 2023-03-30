import {TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';

import BMActionList from '../../modals/BMActionList';

const data = navigation => [
  {
    icon: 'logout',
    text: 'Çıkış Yap',
    onPress: () =>
      auth()
        .signOut()
        .then(() => {
          console.log('User signed out!');
          navigation.navigate('Auth');
        }),
  },
];

export default function DetailsPageActionsButton({
  navigation,
  children,
  style,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableOpacity style={style} onPress={() => setModalVisible(true)}>
      {children}
      <BMActionList
        visible={modalVisible}
        setVisible={setModalVisible}
        data={data(navigation)}
        title=""
      />
    </TouchableOpacity>
  );
}
