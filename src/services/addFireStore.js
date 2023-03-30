import firestore from '@react-native-firebase/firestore';
import toastMessage from '../utils/toastMessage';
import auth from '@react-native-firebase/auth';

export const addBug = (message, url) => {
  const user = auth().currentUser;
  firestore()
    .collection('bugs')
    .add({
      url: url,
      time: Date.now(),
      message: message,
      email: user.email,
    })
    .then(() => toastMessage('Bu ilanı incelemek üzere bize bildirdiniz.'))
    .catch(() => toastMessage('Hata bildirilemedi. Sonra tekrar deneyin'));
};
