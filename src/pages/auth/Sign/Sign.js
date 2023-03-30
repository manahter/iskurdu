import {useTheme} from '@react-navigation/native';
import {SafeAreaView, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import React from 'react';

import styles from './Sign.style';
import Input from '../../../components/inputs/Input';
import Button from '../../../components/buttons/Button';
import IskurLogo from '../../../components/lotties/IskurLogo';
import authErrorMessage from '../../../utils/authErrorMessage';
import toastMessage from '../../../utils/toastMessage';

const initialValues = {
  usermail: '',
  password: '',
  repassword: '',
};

const Sign = ({navigation}) => {
  const {opa} = useTheme();

  async function handleFormSubmit(values) {
    if (values.password !== values.repassword) {
      return toastMessage('Girdiğiniz şifreler uyuşmuyor');
    }
    try {
      await auth().createUserWithEmailAndPassword(
        values.usermail,
        values.repassword,
      );
      navigation.navigate('Login');
      return toastMessage('Hesap oluşturuldu');
    } catch (error) {
      console.log(authErrorMessage(error.code));
    }
  }

  return (
    <SafeAreaView style={{...styles.page, backgroundColor: 'red'}}>
      <IskurLogo />
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <View style={styles.card}>
            <Input
              value={values.usermail}
              onChange={handleChange('usermail')}
              icon="email"
              placeholder="E-Mail"
            />
            <Input
              value={values.password}
              onChange={handleChange('password')}
              placeholder="Şifre"
              icon="key-variant"
              isSecure={true}
            />
            <Input
              value={values.repassword}
              onChange={handleChange('repassword')}
              placeholder="Şifre Tekrarı"
              icon="key-variant"
              isSecure={true}
            />
            <Button text="Giriş" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};
export default Sign;
