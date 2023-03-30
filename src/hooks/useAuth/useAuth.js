import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import Config from 'react-native-config';

import toastMessage from '../../utils/toastMessage';

GoogleSignin.configure({
  webClientId: Config.WEBCLIENT_ID,
});

const fetch = [
  'emailVerified',
  'isAnonymous',
  'displayName',
  'phoneNumber',
  'metadata',
  'photoURL',
  'email',
  'uid',
];

function useAuth() {
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  const signInGoogle = async () => {
    try {
      // Cihaz Google Play'i destekliyor mu?
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

      // Kullanıcı ID Token'ını getir
      const {idToken} = await GoogleSignin.signIn();

      // Token ile Google Kimliği al
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Kimlik bilgileriyle giriş yap
      await auth().signInWithCredential(googleCredential, {
        prompt: 'select_account',
      });
      // ttt.additionalUserInfo.isNewUser; -> Yeni kullanıcı olup olmadığını söylüyor.

      const _user = fetch.reduce((aku, key) => {
        aku[key] = auth().currentUser[key];
        return aku;
      }, {});

      // Kullanıcıya izin verilip verilmediğini kontrol ediyoruz.
      if (
        (await checkPermittedAllUser()) ||
        (await checkPermittedUser(_user))
      ) {
        const userDB = firestore().collection('users').doc(_user.uid);
        dbAddLoginTime(userDB);
        dispatch({type: 'user/load', payload: _user});
        return true;
      }

      // User DB dokümanı Referansını alıyoruz.
    } catch (error) {
      toastMessage('ERROR: signInGoogle', error);
    }
    return false;
  };

  async function checkPermittedAllUser() {
    try {
      const docSnapshot = await firestore()
        .collection('config')
        .doc('activate')
        .get();
      if (docSnapshot.data().permittedAllUser) return true;
    } catch (error) {
      console.log('ERROR: checkPermittedAllUser -> ', error);
    }

    console.log('PERMITTED -> Tüm kulanıcılar için izin kapalı');
  }

  async function checkPermittedUser(_user) {
    try {
      const docSnapshot = await firestore()
        .collection('permittedUsers')
        .doc(_user.email)
        .get();
      if (docSnapshot.exists) return true;
    } catch (error) {
      console.log('ERROR: checkPermittedUser -> ', error);
    }
    toastMessage(
      'Uygulama şuan genele kapalıdır. Giriş için özel izine ihtiyacınız var',
    );
  }

  function dbAddLoginTime(userDB) {
    const loginHistory = userDB.collection('loginHistory');

    userDB
      .get()
      .then(snapshot => {
        if (!snapshot.exists) userDB.set({email: auth().currentUser.email}); // Kullanıcı yoksa oluştur.

        loginHistory.add({loginTime: firestore.FieldValue.serverTimestamp()});
      })
      .catch(error => {
        console.log('ERROR: dbAddLoginTime', error);
      });
  }

  return {
    user,
    signInGoogle,
  };
}

export default useAuth;
