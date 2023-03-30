import {SafeAreaView, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import React from 'react';

import styles from './Login.style';
import Input from '../../../components/inputs/Input';
import Button from '../../../components/buttons/Button';
import IskurLogo from '../../../components/lotties/IskurLogo';
import authErrorMessage from '../../../utils/authErrorMessage';
import {TouchableOpacity} from 'react-native-gesture-handler';

const initialValues = {
  usermail: '',
  password: '',
};

const Login = ({navigation}) => {
  const {opa} = useTheme();

  async function handleFormSubmit(values) {
    try {
      await auth().signInWithEmailAndPassword(values.usermail, values.password);
      console.log('Giriş Yapıldı');
    } catch (error) {
      authErrorMessage(error.code);
    }
  }

  return (
    <SafeAreaView style={{...styles.page, backgroundColor: opa.set0}}>
      <TouchableOpacity
        style={styles.register_button}
        onPress={() => navigation.navigate('Sign')}>
        <Text style={styles.register(opa)}>Kayıt Ol</Text>
      </TouchableOpacity>
      <IskurLogo />
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <View style={styles.card(opa)}>
            {/* <Text style={styles.title}>Giriş</Text> */}
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
            <Button text="Giriş" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};
export default Login;
